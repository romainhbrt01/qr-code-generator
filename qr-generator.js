// Company logos (replace with your actual base64 SVGs)
const COMPANY_LOGOS = {
    msc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTggMTcxIj48cGF0aCBkPSJNMTI4LjkgODQuM2MtNC44IDIuOS0xMS4zIDIuOXYtMjkuN2MwLTEwLTguMi0xOC4yLTE4LjItMTguMi01LjQgMC0xMC40IDIuMy0xMy44IDYuMy0zLjUtNC04LjQtNi4zLTEzLjgtNi4zLTQuOSAwLTkuNSAxLjktMTIuOSA1LjN2LTQuMkg0NXY0Ni44Yy02LjUgMC0xMS4zLTIuOC0xMS4zLTIuOGwtMi4xIDMuN3M1LjQgMy4zIDEzLjQgMy4zYzcuOSAwIDE5LjQtMy43IDE5LjQtMy43czEwLjIgMy43IDE5LjIgMy43IDExLjYtMy43IDE5LjMtMy43YzguMyAwIDE5LjMgMy43IDE5LjMgMy43bC0yLjEtMy43ek01OS43IDgzLjRjLS4xIDAtLjIgMC0uMyAwdi0yMy41YzAtMi44IDIuMi01IDUtNXM1IDIuMiA1IDV2MjUuNGMtMi44LTAuOS01LjctMS44LTkuOC0xLjh6bTI4LjgtMS44di0yNS40YzAtMi44IDIuMi01IDUtNXM1IDIuMiA1IDV2MjMuNmMtNC4xIDAtNi45LjktOS44IDEuOHpNNjguOSAxMDYuMWMtMi4xLS43LTQuNy0xLjMtNy4xLTEuOC0xLjctMC40LTMuMy0wLjctNC41LTFjLTAuOS0wLjMtMS40LTAuOS0xLjQtMS44IDAtMi4yIDIuNi0yLjQgMy43LTIuNCAyLjMgMCA0LjIgMS42IDQuMiAzLjZoLTEzYzAtOC41LTguOS0xMi40LTE3LjItMTIuNC00LjkgMC04LjkgMS4yLTExLjkgMy4zLTMuMyAyLjItNS4yIDUuNC01LjIgOS41IDAgNS44IDQuMiA5LjIgMTQuMSAxMS42IDUuOCAxLjQgNi45IDEuOCA2LjkgMy41IDAgMC41LTAuMiAwLjktMC41IDEuMy0wLjggMC44LTIuMyAxLjItMy4zIDEuMi0wLjUgMC0xLjgtMC4xLTIuOS0wLjctMS4yLTAuNi0xLjgtMS43LTItMy4xbC0xMy40IDAuMWMwIDMuOSAyLjIgNy40IDYuMSAxMCAzLjQgMi4zIDcuOSAzLjcgMTIgMy43IDguOSAwIDE4LjUtNC4zIDE4LjUtMTMuOCAwLTcuMy02LjktMTAuMi05LTEwLjl6bTI5LjYtNC4zYzEuOCAwIDQuMSAxLjEgNC45IDQuOGwwLjEgMC40aDEzLjhsLTAuMS0wLjdjLTAuNi00LjgtMi40LTguNi01LjItMTEuMy0zLjEtMy04LjEtNC42LTEzLjYtNC42LTYgMC0xMC41IDIuMS0xNCA2LTMuMyAzLjYtNS4xIDguNi01LjEgMTQuM3MxLjggMTAuNyA1LjEgMTQuM2MzLjUgMy45IDggNS45IDE0IDUuOSA1LjUgMCAxMC42LTEuNSAxMy43LTQuNiAyLjgtMi43IDQuNi02LjUgNS4yLTExLjRsMC4xLTAuN2gtMTMuOGwtMC4xIDAuNWMtMC44IDMuNi0zIDQuOC00LjkgNC44LTQuMyAwLTUuMi02LjEtNS4yLTguOHMwLjktOC44IDUuMi04Ljh6IiBmaWxsPSIjMjMxRjIwIi8+PC9zdmc+",
    til: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTYgNjY2Ij48cGF0aCBkPSJNMzgyIDM5M2gtM3YtNDhoLTU3di0yMjloNDh2MjI5aDE1OXY0OHpNMzAxIDI0MHYtMTI3aC00OHYxMjd6TTM4MiAzMTV2LTIwMmg0OHYyMDJ6TTI3NCAzMTdjLTE1IDAtMjctMTItMjctMjdzMTItMjcgMjctMjcgMjcgMTIgMjcgMjctMTIgMjctMjcgMjd6IiBmaWxsPSIjMjMxRjIwIi8+PC9zdmc+"
};

// Website URLs
const COMPANY_WEBSITES = {
    msc: "www.msc.com",
    til: "tilgroup.com",
    medlog: "medlog.com"
};

// Set up company selection handler
document.querySelectorAll('input[name="company"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const company = this.value;
        document.getElementById('website').value = COMPANY_WEBSITES[company];
    });
});

// Initialize website field
document.getElementById('website').value = COMPANY_WEBSITES.msc;

function generateQR() {
    const company = document.querySelector('input[name="company"]:checked').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const website = document.getElementById('website').value;

    // Build vCard content
    const vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${firstName} ${lastName}`,
        `N:${lastName};${firstName};;;`,
        `EMAIL:${email}`,
        `TEL:${phone}`,
        `URL:${website}`,
        'END:VCARD'
    ].join('\n');

    // Build API URL
    let apiUrl;
    const encodedData = encodeURIComponent(vCardData);
    
    if (company === 'medlog') {
        apiUrl = `https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?text=${encodedData}`;
    } else {
        apiUrl = `https://qr-code-generator-romain-v2-dtezhae4hjbpeyd2.westeurope-01.azurewebsites.net/generate?text=${encodedData}&logo=${encodeURIComponent(COMPANY_LOGOS[company])}`;
    }

    // Display QR code
    const qrImage = document.getElementById('qrImage');
    const qrContainer = document.getElementById('qrContainer');
    qrImage.src = apiUrl;
    qrContainer.classList.remove('hidden');
}

function resetForm() {
    document.getElementById('vcardForm').reset();
    document.getElementById('website').value = COMPANY_WEBSITES.msc;
    document.getElementById('qrImage').src = '';
    document.getElementById('qrContainer').classList.add('hidden');
}
