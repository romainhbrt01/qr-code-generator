const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  try {
    const { JSDOM } = require('jsdom');
    const { QRCodeStyling } = require('qr-code-styling/lib/qr-code-styling.common.js');
    
    const text = req.query.text;
    const centerEmptyPercent = parseInt(req.query.centerEmpty) || 20; // Default 20% empty center
    const dark = req.query.dark || '#000000';
    const light = req.query.light || '#ffffff';
    const size = parseInt(req.query.size) || 300;

    if (!text) {
      return res.status(400).send('Missing "text" query parameter');
    }

    // Calculate center size based on percentage
    const centerSize = Math.round(size * (centerEmptyPercent / 100));
    // Calculate center position
    const centerPosition = (size - centerSize) / 2;
    
    // Generate QR code with styling
    const qrCode = new QRCodeStyling({
      jsdom: JSDOM, // required for Node.js
      nodeCanvas: require('canvas'), // required for Node.js
      type: "svg",
      width: size,
      height: size,
      data: text,
      margin: 1,
      qrOptions: {
        errorCorrectionLevel: 'H'
      },
      dotsOptions: {
        type: 'rounded',
        color: dark
      },
      backgroundOptions: {
        color: light,
      },
      cornersSquareOptions: {
        type: 'extra-rounded',
        color: dark
      },
      cornersDotOptions: {
        type: 'dot',
        color: dark
      }
    });
    
    // Get the SVG data
    const svgBuffer = await qrCode.getRawData('svg');
    const svgString = svgBuffer.toString();
    
    // Add a white rounded rectangle in the center
    const svgWithCenter = svgString.replace('</svg>',
      `<rect x="${centerPosition}" y="${centerPosition}" width="${centerSize}" height="${centerSize}" rx="${centerSize / 5}" ry="${centerSize / 5}" fill="${light}" /></svg>`
    );
    
    // Set response headers and send
    res.type('svg');
    res.send(Buffer.from(svgWithCenter));
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating QR code: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
