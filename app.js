const express = require('express');
const { QRCodeStyling } = require('qr-code-styling');
const { JSDOM } = require('jsdom');
const app = express();
const port = process.env.PORT || 3000;

// Configure JSDOM for Node.js environment
const dom = new JSDOM();
global.document = dom.window.document;
global.Image = dom.window.Image;

app.get('/', (req, res) => {
  res.send('QR Code Generator API');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text;
  const dark = req.query.dark || '#000000';
  const light = req.query.light || '#ffffff';
  const size = parseInt(req.query.size) || 300;
  const emptyCenterSize = parseFloat(req.query.centerSize) || 0.3; // 30% of QR size

  if (!text) return res.status(400).send('Missing "text" parameter');

  try {
    const qrCode = new QRCodeStyling({
      width: size,
      height: size,
      data: text,
      margin: 10,
      qrOptions: {
        errorCorrectionLevel: 'H'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: emptyCenterSize,
        margin: 5
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

    // Generate PNG buffer
    const buffer = await qrCode.getRawData('png');
    
    res.type('png');
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating QR code: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
