const express = require('express');
const QRCode = require('qrcode');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

// Custom SVG to DataURL converter
function svgToDataURL(svgString) {
  const encodedSVG = encodeURIComponent(svgString)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `data:image/svg+xml,${encodedSVG}`;
}

app.post('/generate-qr', async (req, res) => {
  const { url, logoUrl } = req.body;

  try {
    // Fetch SVG content
    const svgResponse = await axios.get(logoUrl);
    const svgContent = svgResponse.data;

    // Generate QR code with logo
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      width: 300,
      logo: {
        src: svgToDataURL(svgContent),
        width: 50,
        height: 50
      }
    });

    res.send(qrCodeDataURL);
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`QR code generator app listening at http://localhost:${port}`);
});
