const express = require('express');
const QRCode = require('qrcode');
const { createCanvas } = require('canvas');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text;
  const centerSize = parseFloat(req.query.centerSize) || 0.2; // Default 20% of QR size
  const dark = req.query.dark || '#000000';
  const light = req.query.light || '#ffffff';
  const size = parseInt(req.query.size) || 300;

  if (!text) {
    return res.status(400).send('Missing "text" query parameter');
  }

  try {
    // Create canvas
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Generate QR code to canvas
    await QRCode.toCanvas(canvas, text, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: size,
      color: {
        dark,
        light
      }
    });

    // Calculate center square dimensions
    const centerSquareSize = size * centerSize;
    const centerPosition = (size - centerSquareSize) / 2;

    // Draw white square in center
    ctx.fillStyle = light;
    ctx.fillRect(centerPosition, centerPosition, centerSquareSize, centerSquareSize);

    // Send response
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
