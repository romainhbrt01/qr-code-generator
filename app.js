const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).send('Missing "text" query parameter');
  }
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text);
    res.type('png');
    res.send(Buffer.from(qrCodeDataUrl.split(',')[1], 'base64'));
  } catch (error) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
