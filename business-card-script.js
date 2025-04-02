const COMPANY_LOGOS = {
    msc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQVJUV09SSyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNTguMTEgMTcxLjMxIj4KICA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjkuMy4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjAgQnVpbGQgMTUxKSAgLS0+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5zdDAgewogICAgICAgIGZpbGw6ICMyMjIyMjE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXJxdWUiPgogICAgPGc+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguODYsODQuMjZzLTQuODwsMi44OC0xMS4yNywyLjg5di0yOS42OGMwLTEwLjA0LTguMTctMTguMjEtMTguMjEtMTguMjEtNS4zNiwwLTEwLjM0LDIuMy0xMy44LDYuMzQtMy40Ny00LjA0LTguNDQtNi4zNC0xMy44MS02LjM0LTQuOSwwLTkuNSwxLjkzLTEyLjksNS4zNnYtNC4yMmgtMTguNDN2NDYuNzVzLS4wMiwwLS4wMywwYy02LjQ3LDAtMTEuMzMtMi43Ny0xMS4zMy0yLjc3bC0yLjA1LDMuNzNzNS4zOSwzLjI5LDEzLjQsMy4yOSwxMS43LTMuNywxOS4zNS0zLjcsMTAuMjQsMy43MSwxOS4yMiwzLjcxLDExLjY1LTMuNzEsMTkuMy0zLjcxLDExLjAxLDMuNzEsMTkuMjgsMy43MWM3LjU5LDAsMTMuMzQtMy40MSwxMy4zNC0zLjQxbC0yLjA0LTMuNzNaTTU5LjcxLDgzLjQ0Yy0uMDgsMC0uMTUsMC0uMjMsMHYtMjMuNTRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyNS4zOGMtMi44My0uOTItNS43Mi0xLjg0LTkuNzgtMS44NFpNODguNTQsODUuMjd2LTI1LjRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyMy41N2MtLjA5LDAtLjE3LDAtLjI2LDAtNC4wNCwwLTYuOTMuOTEtOS43NSwxLjgzWiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguODcsMTA2LjE0Yy0yLjA0LS43LTQuNzItMS4yNi03LjA4LTEuNzYtMS43Mi0uMzYtMy4zNC0uNy00LjUzLTEuMDUtLjg5LS4yNi0xLjM5LS44OS0xLjM5LTEuNzUsMC0yLjE3LDIuNTctMi40LDMuNjctMi40LDIuMjksMCw0LjIyLDEuNjUsNC4yMiwzLjYxaDEzLjAyYzAtOC41My04LjktMTIuNDEtMTcuMTYtMTIuNDEtNC44NiwwLTguOTEsMS4yMy0xMS45MiwzLjI4LTMuMzEsMi4yNS01LjE5LDUuNDQtNS4xOSw5LjUsMCw1Ljc2LDQuMiw5LjIzLDE0LjA2LDExLjYsNS43NiwxLjM5LDYuOSwxLjgxLDYuOTIsMy41LDAsLjQ4LS4xNi44OS0uNTIsMS4yNS0uNzkuOC0yLjI1LDEuMTYtMy4zNSwxLjE2LS40OSwwLTEuNzYtLjA3LTIuOTQtLjczLTEuMTUtLjY0LTEuODMtMS42NS0yLjAzLTIuOTlsLTEzLjQuMDljMCwzLjg3LDIuMTcsNy40Niw2LjEyLDEwLjExLDMuNDMsMi4zLDcuOTEsMy42NywxMS45OSwzLjY3LDguOTIsMCwxOC41Mi00LjMxLDE4LjUyLTEzLjc4LDAtNy4yNi02Ljg5LTEwLjE5LTktMTAuOTFaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05OC41MiwxMDEuODVjMS43OSwwLDQuMDQsMS4xNCw0Ljg2LDQuNzVsLjExLjQ4aDEzLjc1bC0uMDktLjY4Yy0uNjQtNC44NC0yLjM5LTguNjYtNS4yLTExLjM4LTMuMTUtMy4wNC04LjE2LTQuNTktMTMuNjYtNC41OS02LjA1LDAtMTAuNSwyLjA2LTE0LjAzLDUuOTUtMy4yNiwzLjU5LTUuMDYsOC42Ni01LjA2LDE0LjI3czEuOCwxMC42OCw1LjA2LDE0LjI3YzMuNTQsMy44OSw3LjkxLDUuOTUsMTMuOTcsNS45NSw1LjUxLDAsMTAuNTktMS41NCwxMy43My00LjU5LDIuODEtMi43Miw0LjU2LTYuNTUsNS4yLTExLjM4bC4wOS0uNjhoLTEzLjc1bC0uMTEuNDhjLS44MiwzLjYxLTMuMDIsNC43NS00Ljg2LDQuNzUtNC4zLDAtNS4yNC02LjEyLTUuMjQtOC43OXMuOTQtOC43OSw1LjI0LTguNzlaIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=",
    til: "data:image/svg+xml;base64,...",
    medlog: ""
};

function generateBusinessCard() {
    // Update preview elements
    document.getElementById('previewName').textContent = 
        `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`;
    
    document.getElementById('previewJobTitle').textContent = 
        document.getElementById('jobTitle').value;
    
    document.getElementById('previewCompany').textContent = 
        document.getElementById('company').options[document.getElementById('company').selectedIndex].text;
    
    document.getElementById('previewAddress').textContent = 
        document.getElementById('companyAddress').value;
    
    document.getElementById('previewPhone').textContent = 
        `T. ${document.getElementById('phone').value}`;
    
    document.getElementById('previewMobile').textContent = 
        `M. ${document.getElementById('mobile').value}`;
    
    document.getElementById('previewEmail').textContent = 
        document.getElementById('email').value;
    
    document.getElementById('previewWebsite').textContent = 
        document.getElementById('website').value;
    
    document.getElementById('previewCountry').textContent = 
        document.getElementById('country').value;

    // Update logo
    const company = document.getElementById('company').value;
    document.getElementById('previewLogo').src = COMPANY_LOGOS[company];

    // Generate QR code
    const qrData = [
        `BEGIN:VCARD`,
        `VERSION:3.0`,
        `FN:${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
        `TITLE:${document.getElementById('jobTitle').value}`,
        `ORG:${document.getElementById('company').options[document.getElementById('company').selectedIndex].text}`,
        `TEL:${document.getElementById('phone').value}`,
        `TEL;CELL:${document.getElementById('mobile').value}`,
        `EMAIL:${document.getElementById('email').value}`,
        `URL:${document.getElementById('website').value}`,
        `ADR:;;${document.getElementById('companyAddress').value}`,
        `END:VCARD`
    ].join('\n');

    const encodedData = encodeURIComponent(qrData);
    const qrUrl = `https://qr-code-generator-romain-v2-dtezhae4hjbpeyd2.westeurope-01.azurewebsites.net/generate?text=${encodedData}`;
    document.getElementById('previewQrCode').src = qrUrl;
}

async function downloadCard() {
    const cardElement = document.getElementById('cardPreview');
    
    // Use html2canvas to capture card as image
    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF
    const pdf = new jspdf.jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [3.375, 2.125]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, 3.375, 2.125);
    pdf.save('business-card.pdf');
}

// Initialize form inputs
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', generateBusinessCard);
});

// Initial generation
generateBusinessCard();
