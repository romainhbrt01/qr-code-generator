const express = require('express');
const QRCode = require('qrcode');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML/CSS/JS) from root directory
app.use(express.static(path.join(__dirname)));

// Route handler for root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// QR Code Generation API
app.get('/generate', async (req, res) => {
  const text = req.query.text;
  const centerImageUrl = req.query.centerImageUrl;
  const dark = req.query.dark || '#000000';
  const light = req.query.light || '#ffffff';
  const size = parseInt(req.query.size) || 300;

  if (!text) {
    return res.status(400).send('Missing "text" query parameter');
  }

  try {
    const qrOptions = {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: size,
      height: size,
      color: { dark, light }
    };

    if (centerImageUrl) {
      qrOptions.logo = { url: centerImageUrl };
    }

    const qrCodeDataUrl = await QRCode.toDataURL(text, qrOptions);
    res.type('png');
    res.send(Buffer.from(qrCodeDataUrl.split(',')[1], 'base64'));
  } catch (error) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
