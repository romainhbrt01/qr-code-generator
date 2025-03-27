const express = require('express');
const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas'); // Added loadImage
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text;
  const centerSize = parseFloat(req.query.centerSize) || 0.2;
  const centerImageUrl = req.query.centerImageUrl; // New parameter
  const dark = req.query.dark || '#000000';
  const light = req.query.light || '#ffffff';
  const size = parseInt(req.query.size) || 300;

  if (!text) {
    return res.status(400).send('Missing "text" query parameter');
  }

  try {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Generate base QR code
    await QRCode.toCanvas(canvas, text, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: size,
      color: { dark, light }
    });

    // Calculate center dimensions
    const centerSquareSize = size * centerSize;
    const centerPosition = (size - centerSquareSize) / 2;

    // Draw blank space
    ctx.fillStyle = light;
    ctx.fillRect(centerPosition, centerPosition, centerSquareSize, centerSquareSize);

    // Add center image if provided
    if (centerImageUrl) {
      try {
        const img = await loadImage(centerImageUrl);
        const logoSize = centerSquareSize * 0.8; // 80% of blank space
        const logoPosition = centerPosition + (centerSquareSize - logoSize) / 2;
        
        ctx.drawImage(
          img,
          logoPosition,
          logoPosition,
          logoSize,
          logoSize
        );
      } catch (imgError) {
        console.error('Image loading error:', imgError);
        // Continue with QR generation without image
      }
    }

    res.type('png');
    res.send(canvas.toBuffer());
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
