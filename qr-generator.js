function generateQR() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    // Create vCard content
    const vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${firstName} ${lastName}`,
        `N:${lastName};${firstName};;;`,
        `EMAIL:${email}`,
        `TEL:${phone}`,
        `ADR:;;;${country}`,
        'END:VCARD'
    ].join('\n');

    // Encode for URL
    const encodedData = encodeURIComponent(vCardData);
    
    // Generate QR Code
    const qrImage = document.getElementById('qrImage');
    const qrContainer = document.getElementById('qrContainer');
    const apiUrl = `https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?Text=${encodedData}`;

    qrImage.src = apiUrl;
    qrContainer.classList.remove('hidden');
}

function resetForm() {
    // Reset form fields
    document.getElementById('vcardForm').reset();
    
    // Clear QR code
    const qrContainer = document.getElementById('qrContainer');
    const qrImage = document.getElementById('qrImage');
    qrImage.src = '';
    qrContainer.classList.add('hidden');
}
