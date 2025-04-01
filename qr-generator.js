// Company logos (replace with your actual base64 SVGs)
const COMPANY_LOGOS = {
    msc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQVJUV09SSyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNTguMTEgMTcxLjMxIj4KICA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjkuMy4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjAgQnVpbGQgMTUxKSAgLS0+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5zdDAgewogICAgICAgIGZpbGw6ICMyMjIyMjE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXJxdWUiPgogICAgPGc+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguODYsODQuMjZzLTQuODIsMi44OC0xMS4yNywyLjg5di0yOS42OGMwLTEwLjA0LTguMTctMTguMjEtMTguMjEtMTguMjEtNS4zNiwwLTEwLjM0LDIuMy0xMy44LDYuMzQtMy40Ny00LjA0LTguNDQtNi4zNC0xMy44MS02LjM0LTQuOSwwLTkuNSwxLjkzLTEyLjksNS4zNnYtNC4yMmgtMTguNDN2NDYuNzVzLS4wMiwwLS4wMywwYy02LjQ3LDAtMTEuMzMtMi43Ny0xMS4zMy0yLjc3bC0yLjA1LDMuNzNzNS4zOSwzLjI5LDEzLjQsMy4yOSwxMS43LTMuNywxOS4zNS0zLjcsMTAuMjQsMy43MSwxOS4yMiwzLjcxLDExLjY1LTMuNzEsMTkuMy0zLjcxLDExLjAxLDMuNzEsMTkuMjgsMy43MWM3LjU5LDAsMTMuMzQtMy40MSwxMy4zNC0zLjQxbC0yLjA0LTMuNzNaTTU5LjcxLDgzLjQ0Yy0uMDgsMC0uMTUsMC0uMjMsMHYtMjMuNTRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyNS4zOGMtMi44My0uOTItNS43Mi0xLjg0LTkuNzgtMS44NFpNODguNTQsODUuMjd2LTI1LjRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyMy41N2MtLjA5LDAtLjE3LDAtLjI2LDAtNC4wNCwwLTYuOTMuOTEtOS43NSwxLjgzWiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguODcsMTA2LjE0Yy0yLjA0LS43LTQuNzItMS4yNi03LjA4LTEuNzYtMS43Mi0uMzYtMy4zNC0uNy00LjUzLTEuMDUtLjg5LS4yNi0xLjM5LS44OS0xLjM5LTEuNzUsMC0yLjE3LDIuNTctMi40LDMuNjctMi40LDIuMjksMCw0LjIyLDEuNjUsNC4yMiwzLjYxaDEzLjAyYzAtOC41My04LjktMTIuNDEtMTcuMTYtMTIuNDEtNC44NiwwLTguOTEsMS4yMy0xMS45MiwzLjI4LTMuMzEsMi4yNS01LjE5LDUuNDQtNS4xOSw5LjUsMCw1Ljc2LDQuMiw5LjIzLDE0LjA2LDExLjYsNS43NiwxLjM5LDYuOSwxLjgxLDYuOTIsMy41LDAsLjQ4LS4xNi44OS0uNTIsMS4yNS0uNzkuOC0yLjI1LDEuMTYtMy4zNSwxLjE2LS40OSwwLTEuNzYtLjA3LTIuOTQtLjczLTEuMTUtLjY0LTEuODMtMS42NS0yLjAzLTIuOTlsLTEzLjQuMDljMCwzLjg3LDIuMTcsNy40Niw2LjEyLDEwLjExLDMuNDMsMi4zLDcuOTEsMy42NywxMS45OSwzLjY3LDguOTIsMCwxOC41Mi00LjMxLDE4LjUyLTEzLjc4LDAtNy4yNi02Ljg5LTEwLjE5LTktMTAuOTFaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05OC41MiwxMDEuODVjMS43OSwwLDQuMDQsMS4xNCw0Ljg2LDQuNzVsLjExLjQ4aDEzLjc1bC0uMDktLjY4Yy0uNjQtNC44NC0yLjM5LTguNjYtNS4yLTExLjM4LTMuMTUtMy4wNC04LjE2LTQuNTktMTMuNjYtNC41OS02LjA1LDAtMTAuNSwyLjA2LTE0LjAzLDUuOTUtMy4yNiwzLjU5LTUuMDYsOC42Ni01LjA2LDE0LjI3czEuOCwxMC42OCw1LjA2LDE0LjI3YzMuNTQsMy44OSw3LjkxLDUuOTUsMTMuOTcsNS45NSw1LjUxLDAsMTAuNTktMS41NCwxMy43My00LjU5LDIuODEtMi43Miw0LjU2LTYuNTUsNS4yLTExLjM4bC4wOS0uNjhoLTEzLjc1bC0uMTEuNDhjLS44MiwzLjYxLTMuMDIsNC43NS00Ljg2LDQuNzUtNC4zLDAtNS4yNC02LjEyLTUuMjQtOC43OXMuOTQtOC43OSw1LjI0LTguNzlaIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=",
    til: "BASE64_SVG_FOR_TIL"
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
        apiUrl = `https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?Text=${encodedData}`;
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
