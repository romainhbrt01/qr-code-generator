const express = require('express');
const QRCode = require('qrcode');
const QRCodeStyling = require('qr-code-styling');
const { createCanvas, loadImage } = require('canvas');
const app = express();
const port = process.env.PORT || 3000;

// Configure for Node.js environment
if (typeof window === 'undefined') {
  global.document = {
    createElement: (tag) => {
      if (tag === 'canvas') return createCanvas(100, 100);
      return { style: {} };
    },
    createElementNS: (namespace, tag) => { // Add this new method
      return document.createElement(tag);
    }
  };
  
  global.window = { 
    devicePixelRatio: 1,
    URL: { createObjectURL: () => {} } // Add missing URL polyfill
  };
  
  global.Image = class {
    constructor() {
      this.onload = null;
      this.onerror = null;
    }
    set src(src) {
      loadImage(src).then(img => {
        this.width = img.width;
        this.height = img.height;
        this._img = img;
        this.onload?.();
      }).catch(err => this.onerror?.(err));
    }
  };
}

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text;
  const centerImageUrl = req.query.centerImageUrl;
  const dark = req.query.dark || '#000000';
  const light = req.query.light || '#ffffff';
  const size = parseInt(req.query.size) || 300;
  
  // New parameters for styling
  const dotType = req.query.dotType || 'square'; // Options: square, rounded, dots, extra-rounded
  const cornerSquareType = req.query.cornerSquareType || 'square';
  const cornerSquareSize = parseFloat(req.query.cornerSquareSize) || 1; // Size of corner squares (0-1)

  if (!text) {
    return res.status(400).send('Missing "text" query parameter');
  }

  try {
    // If no styling is requested, use the original method for backward compatibility
    if (dotType === 'square' && cornerSquareType === 'square') {
      const qrOptions = {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: size,
        height: size,
        color: { dark, light }
      };

      const qrCodeDataUrl = await QRCode.toDataURL(text, qrOptions);
      res.type('png');
      return res.send(Buffer.from(qrCodeDataUrl.split(',')[1], 'base64'));
    }
    
    // Create a canvas for the styled QR code
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Generate styled QR code
const qrCode = new QRCodeStyling({
  width: size,
  height: size,
  type: 'canvas',
  data: text,
  margin: 1,
  qrOptions: {
    errorCorrectionLevel: 'H',
    version: 5 // Force higher version for better error correction
  },
  dotsOptions: {
    color: dark,
    type: dotType
  },
  cornersSquareOptions: {
    color: dark,
    type: cornerSquareType,
    size: cornerSquareSize
  },
  backgroundOptions: {
    color: light,
    round: 0.1 // Add background rounding
  },
  imageOptions: centerImageUrl ? {
    source: centerImageUrl,
    imageSize: 0.25, // Reduced from 0.3 for better scanning
    margin: 8,
    crossOrigin: 'anonymous' // Add CORS handling
  } : undefined
});
    
    // Render to canvas (adapter implementation)
    const tempCanvas = await QRCode.toCanvas(canvas, text, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: size,
      color: { dark: 'transparent', light: 'transparent' }
    });
    
    // Use styling information to draw QR code
    if (dotType !== 'square' || cornerSquareType !== 'square') {
      // Generate basic QR first
      const basicCanvas = createCanvas(size, size);
      await QRCode.toCanvas(basicCanvas, text, {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: size
      });
      
      // Get QR data
      const qrData = basicCanvas.getContext('2d').getImageData(0, 0, size, size);
      const moduleSize = Math.ceil(size / 29); // Approximate module size
      
      // Clear canvas
      ctx.fillStyle = light;
      ctx.fillRect(0, 0, size, size);
      
      // Draw styled dots
      for (let y = 0; y < size; y += moduleSize) {
        for (let x = 0; x < size; x += moduleSize) {
          const pixelIndex = ((y + moduleSize/2) * size + (x + moduleSize/2)) * 4;
          if (qrData.data[pixelIndex] < 128) {
            ctx.fillStyle = dark;
            
            // Check if this is a corner square module
            const isCorner = (x < moduleSize * 7 && y < moduleSize * 7) || // Top-left
                           (x > size - moduleSize * 7 && y < moduleSize * 7) || // Top-right
                           (x < moduleSize * 7 && y > size - moduleSize * 7); // Bottom-left
            
            const radius = isCorner && cornerSquareType === 'rounded' ? moduleSize * 0.5 : 
                          dotType === 'rounded' ? moduleSize * 0.5 : 
                          dotType === 'extra-rounded' ? moduleSize * 0.8 : 0;
            
            if (radius > 0) {
              // Draw rounded rectangle
              ctx.beginPath();
              ctx.moveTo(x + radius, y);
              ctx.lineTo(x + moduleSize - radius, y);
              ctx.quadraticCurveTo(x + moduleSize, y, x + moduleSize, y + radius);
              ctx.lineTo(x + moduleSize, y + moduleSize - radius);
              ctx.quadraticCurveTo(x + moduleSize, y + moduleSize, x + moduleSize - radius, y + moduleSize);
              ctx.lineTo(x + radius, y + moduleSize);
              ctx.quadraticCurveTo(x, y + moduleSize, x, y + moduleSize - radius);
              ctx.lineTo(x, y + radius);
              ctx.quadraticCurveTo(x, y, x + radius, y);
              ctx.fill();
            } else {
              // Draw square
              ctx.fillRect(x, y, moduleSize, moduleSize);
            }
          }
        }
      }
    }
    
    // Add center image if needed
if (centerImageUrl) {
  try {
    const logo = await loadImage(centerImageUrl);
    const logoSize = size * 0.2;
    const logoX = (size - logoSize) / 2;
    const logoY = (size - logoSize) / 2;
    
    // Create transparent background for logo
    ctx.clearRect(logoX, logoY, logoSize, logoSize);
    
    // Draw logo with rounded corners
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(logoX, logoY, logoSize, logoSize, 8);
    ctx.clip();
    ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
    ctx.restore();
  } catch (logoError) {
    console.error('Error loading logo:', logoError);
    // Fallback to empty center space
    ctx.clearRect(size/2 - size*0.1, size/2 - size*0.1, size*0.2, size*0.2);
  }
}
    
    // Send the result
    const buffer = canvas.toBuffer('image/png');
    res.type('png');
    res.send(buffer);
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Error generating QR code: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
