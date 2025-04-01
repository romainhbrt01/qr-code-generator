const COMPANY_LOGOS = {
    msc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTggMTcxIj48cGF0aCBkPSJNMTI4LjkgODQuM2MtNC44IDIuOS0xMS4zIDIuOXYtMjkuN2MwLTEwLTguMi0xOC4yLTE4LjItMTguMi01LjQgMC0xMC40IDIuMy0xMy44IDYuMy0zLjUtNC04LjQtNi4zLTEzLjgtNi4zLTQuOSAwLTkuNSAxLjktMTIuOSA1LjN2LTQuMkg0NXY0Ni44Yy02LjUgMC0xMS4zLTIuOC0xMS4zLTIuOGwtMi4xIDMuN3M1LjQgMy4zIDEzLjQgMy4zYzcuOSAwIDE5LjQtMy43IDE5LjQtMy43czEwLjIgMy43IDE5LjIgMy43IDExLjYtMy43IDE5LjMtMy43YzguMyAwIDE5LjMgMy43IDE5LjMgMy43bC0yLjEtMy43ek01OS43IDgzLjRjLTAuMSAwLTAuMiAwLTAuMyAwdi0yMy41YzAtMi44IDIuMi01IDUtNXM1IDIuMiA1IDV2MjUuNGMtMi44LTAuOS01LjctMS44LTkuOC0xLjh6bTI4LjgtMS44di0yNS40YzAtMi44IDIuMi01IDUtNXM1IDIuMiA1IDV2MjMuNmMtNC4xIDAtNi45LjktOS44IDEuOHpNNjguOSAxMDYuMWMtMi4xLTAuNy00LjctMS4zLTcuMS0xLjgtMS43LTAuNC0zLjMtMC43LTQuNS0xYy0wLjktMC4zLTEuNC0wLjktMS40LTEuOCAwLTIuMiAyLjYtMi40IDMuNy0yLjQgMi4zIDAgNC4yIDEuNiA0LjIgMy42aC0xM2MwLTguNS04LjktMTIuNC0xNy4yLTEyLjQtNC45IDAtOC45IDEuMi0xMS45IDMuMy0zLjMgMi4yLTUuMiA1LjQtNS4yIDkuNSAwIDUuOCA0LjIgOS4yIDE0LjEgMTEuNiA1LjggMS40IDYuOSAxLjggNi45IDMuNSAwIDAuNS0wLjIgMC45LTAuNSAxLjMtMC44IDAuOC0yLjMgMS4yLTMuMyAxLjItMC41IDAtMS44LTAuMS0yLjktMC43LTEuMi0wLjYtMS44LTEuNy0yLTMuMWwtMTMuNCAwLjFjMCAzLjkgMi4yIDcuNCA2LjEgMTAgMy40IDIuMyA3LjkgMy43IDEyIDMuNyA4LjkgMCAxOC41LTQuMyAxOC41LTEzLjggMC03LjMtNi45LTEwLjItOS0xMC45em0yOS42LTQuM2MxLjggMCA0LjEgMS4xIDQuOSA0LjhsMC4xIDAuNGgxMy44bC0wLjEtMC43Yy0wLjYtNC44LTIuNC04LjYtNS4yLTExLjMtMy4xLTMtOC4xLTQuNi0xMy42LTQuNi02IDAtMTAuNSAyLjEtMTQgNi0zLjMgMy42LTUuMSA4LjYtNS4xIDE0LjNzMS44IDEwLjcgNS4xIDE0LjNjMy41IDMuOSA4IDUuOSAxNCA1LjkgNS41IDAgMTAuNi0xLjUgMTMuNy00LjYgMi44LTIuNyA0LjYtNi41IDUuMi0xMS40bDAuMS0wLjdoLTEzLjhsLTAuMSAwLjVjLTAuOCAzLjYtMyA0LjgtNC45IDQuOC00LjMgMC01LjItNi4xLTUuMi04LjhzMC45LTguOCA1LjItOC44eiIgZmlsbD0iIzIzMUYyMCIvPjwvc3ZnPg==",
    til: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTYgNjY2Ij48cGF0aCBkPSJNMzgyIDM5M2gtM3YtNDhoLTU3di0yMjloNDh2MjI5aDE1OXY0OHpNMzAxIDI0MHYtMTI3aC00OHYxMjd6TTM4MiAzMTV2LTIwMmg0OHYyMDJ6TTI3NCAzMTdjLTE1IDAtMjctMTItMjctMjdzMTItMjcgMjctMjcgMjcgMTIgMjcgMjctMTIgMjctMjcgMjd6IiBmaWxsPSIjMjMxRjIwIi8+PC9zdmc+"
};

const COMPANY_WEBSITES = {
    msc: "www.msc.com",
    til: "tilgroup.com",
    medlog: "medlog.com"
};

document.addEventListener('DOMContentLoaded', () => {
    // Set initial website value
    document.getElementById('website').value = COMPANY_WEBSITES.msc;
    
    // Set default QR code
    updateQRCode(true);
    
    // Add radio button listeners
    document.querySelectorAll('input[name="company"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const company = this.value;
            document.getElementById('website').value = COMPANY_WEBSITES[company];
            updateQRCode(false);
        });
    });
});

function generateQR() {
    updateQRCode(false);
}

function resetForm() {
    document.getElementById('vcardForm').reset();
    document.getElementById('website').value = COMPANY_WEBSITES.msc;
    document.querySelector('input[name="company"][value="msc"]').checked = true;
    updateQRCode(true);
}

function updateQRCode(useDefault) {
    const company = document.querySelector('input[name="company"]:checked').value;
    let apiUrl;
    
    if(useDefault) {
        // MEDLOG API with demo data
        apiUrl = 'https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?text=BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3AJohn%20Doe%0AN%3ADoe%3BJohn%3B%3B%3B%0AEMAIL%3Ajohn%40medlog.com%0ATEL%3A%2B123456789%0AURL%3Awww.medlog.com%0AEND%3AVCARD';
    } else {
        const vCardData = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
            `N:${document.getElementById('lastName').value};${document.getElementById('firstName').value};;;`,
            `EMAIL:${document.getElementById('email').value}`,
            `TEL:${document.getElementById('phone').value}`,
            `URL:${document.getElementById('website').value}`,
            'END:VCARD'
        ].join('\n');
        
        const encodedData = encodeURIComponent(vCardData);
        
        if(company === 'medlog') {
            apiUrl = `https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?text=${encodedData}`;
        } else {
            apiUrl = `https://qr-code-generator-romain-v2-dtezhae4hjbpeyd2.westeurope-01.azurewebsites.net/generate?text=${encodedData}&logo=${encodeURIComponent(COMPANY_LOGOS[company])}`;
        }
    }
    
    document.getElementById('qrImage').src = apiUrl;
}
