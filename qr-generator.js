// Company logos as Base64 SVG strings
const COMPANY_LOGOS = {
    msc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQVJUV09SSyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNTguMTEgMTcxLjMxIj4KICA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjkuMy4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjAgQnVpbGQgMTUxKSAgLS0+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5zdDAgewogICAgICAgIGZpbGw6ICMyMjIyMjE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXJxdWUiPgogICAgPGc+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguODYsODQuMjZzLTQuODIsMi44OC0xMS4yNywyLjg5di0yOS42OGMwLTEwLjA0LTguMTctMTguMjEtMTguMjEtMTguMjEtNS4zNiwwLTEwLjM0LDIuMy0xMy44LDYuMzQtMy40Ny00LjA0LTguNDQtNi4zNC0xMy44MS02LjM0LTQuOSwwLTkuNSwxLjkzLTEyLjksNS4zNnYtNC4yMmgtMTguNDN2NDYuNzVzLS4wMiwwLS4wMywwYy02LjQ3LDAtMTEuMzMtMi43Ny0xMS4zMy0yLjc3bC0yLjA1LDMuNzNzNS4zOSwzLjI5LDEzLjQsMy4yOSwxMS43LTMuNywxOS4zNS0zLjcsMTAuMjQsMy43MSwxOS4yMiwzLjcxLDExLjY1LTMuNzEsMTkuMy0zLjcxLDExLjAxLDMuNzEsMTkuMjgsMy43MWM3LjU5LDAsMTMuMzQtMy40MSwxMy4zNC0zLjQxbC0yLjA0LTMuNzNaTTU5LjcxLDgzLjQ0Yy0uMDgsMC0uMTUsMC0uMjMsMHYtMjMuNTRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyNS4zOGMtMi44My0uOTItNS43Mi0xLjg0LTkuNzgtMS44NFpNODguNTQsODUuMjd2LTI1LjRjMC0yLjc2LDIuMjQtNSw1LTVzNSwyLjI0LDUsNXYyMy41N2MtLjA5LDAtLjE3LDAtLjI2LDAtNC4wNCwwLTYuOTMuOTEtOS43NSwxLjgzWiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguODcsMTA2LjE0Yy0yLjA0LS43LTQuNzItMS4yNi03LjA4LTEuNzYtMS43Mi0uMzYtMy4zNC0uNy00LjUzLTEuMDUtLjg5LS4yNi0xLjM5LS44OS0xLjM5LTEuNzUsMC0yLjE3LDIuNTctMi40LDMuNjctMi40LDIuMjksMCw0LjIyLDEuNjUsNC4yMiwzLjYxaDEzLjAyYzAtOC41My04LjktMTIuNDEtMTcuMTYtMTIuNDEtNC44NiwwLTguOTEsMS4yMy0xMS45MiwzLjI4LTMuMzEsMi4yNS01LjE5LDUuNDQtNS4xOSw5LjUsMCw1Ljc2LDQuMiw5LjIzLDE0LjA2LDExLjYsNS43NiwxLjM5LDYuOSwxLjgxLDYuOTIsMy41LDAsLjQ4LS4xNi44OS0uNTIsMS4yNS0uNzkuOC0yLjI1LDEuMTYtMy4zNSwxLjE2LS40OSwwLTEuNzYtLjA3LTIuOTQtLjczLTEuMTUtLjY0LTEuODMtMS42NS0yLjAzLTIuOTlsLTEzLjQuMDljMCwzLjg3LDIuMTcsNy40Niw2LjEyLDEwLjExLDMuNDMsMi4zLDcuOTEsMy42NywxMS45OSwzLjY3LDguOTIsMCwxOC41Mi00LjMxLDE4LjUyLTEzLjc4LDAtNy4yNi02Ljg5LTEwLjE5LTktMTAuOTFaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05OC41MiwxMDEuODVjMS43OSwwLDQuMDQsMS4xNCw0Ljg2LDQuNzVsLjExLjQ4aDEzLjc1bC0uMDktLjY4Yy0uNjQtNC44NC0yLjM5LTguNjYtNS4yLTExLjM4LTMuMTUtMy4wNC04LjE2LTQuNTktMTMuNjYtNC41OS02LjA1LDAtMTAuNSwyLjA2LTE0LjAzLDUuOTUtMy4yNiwzLjU5LTUuMDYsOC42Ni01LjA2LDE0LjI3czEuOCwxMC42OCw1LjA2LDE0LjI3YzMuNTQsMy44OSw3LjkxLDUuOTUsMTMuOTcsNS45NSw1LjUxLDAsMTAuNTktMS41NCwxMy43My00LjU5LDIuODEtMi43Miw0LjU2LTYuNTUsNS4yLTExLjM4bC4wOS0uNjhoLTEzLjc1bC0uMTEuNDhjLS44MiwzLjYxLTMuMDIsNC43NS00Ljg2LDQuNzUtNC4zLDAtNS4yNC02LjEyLTUuMjQtOC43OXMuOTQtOC43OSw1LjI0LTguNzlaIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=",
    til: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDc1NS45MDUzMyA2NjUuODIxMzUiCiAgIGhlaWdodD0iNjY1LjgyMTM1IgogICB3aWR0aD0iNzU1LjkwNTMzIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNiI+PGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGgzMCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aAogICAgICAgICBpZD0icGF0aDI4IgogICAgICAgICBkPSJNIDAsNDk5LjM2NiBIIDU2Ni45MjkgViAwIEggMCBaIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLDAsNjY1LjgyMTMzKSIKICAgICBpZD0iZzEwIj48ZwogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzgyLjAyMTIsMzkyLjg4MTcpIgogICAgICAgaWQ9ImcxMiI+PHBhdGgKICAgICAgICAgaWQ9InBhdGgxNCIKICAgICAgICAgc3R5bGU9ImZpbGw6IzIzMWYyMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgaCAtMy4wMTEgLTI3My41OTkgLTMgdiAtMyAtNDguMDUgLTMgaCAzIDYwLjA1OSB2IC0yMjguNjUgLTMgaCAzIDQ4LjA0MSAzIHYgMyAyMjguNjUgaCAxNTkuMzIgMi45ODggbCAwLjAxMiwyLjk4OCAwLjE3OSw0OC4wNTEgeiIgLz48L2c+PGcKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMC42NTAxLDI0MC4yOTE4KSIKICAgICAgIGlkPSJnMTYiPjxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTgiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMyMzFmMjA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gMCwwIGggLTMgLTQ4LjAzIC0zIHYgLTMgLTEyNy4xMjEgLTMgaCAzIEggLTMgMCB2IDMgViAtMyBaIiAvPjwvZz48ZwogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzgxLjc1MDcsMzE1LjMwMTYpIgogICAgICAgaWQ9ImcyMCI+PHBhdGgKICAgICAgICAgaWQ9InBhdGgyMiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzIzMWYyMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgaCAtMyAtNDguMDMgLTMgdiAtMyBsIC0wLjAzLC0yMDIuMTA5IC0xMGUtNCwtMy4wMDEgaCAzLjAwMSAxMzEuMzYgMyB2IDMgNDguMDMgMyBoIC0zIC04MC4zMiBMIDAsLTMgWiIgLz48L2c+PGcKICAgICAgIGlkPSJnMjQiPjxnCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDMwKSIKICAgICAgICAgaWQ9ImcyNiI+PGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzMuNjQwOCwzMTYuNjAxNCkiCiAgICAgICAgICAgaWQ9ImczMiI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMzQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMjMxZjIwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAwLDAgYyAtMTUuMDc2LDAgLTI3LjM0LC0xMi4yNiAtMjcuMzQsLTI3LjMzIDAsLTE1LjA2OSAxMi4yNjQsLTI3LjMzIDI3LjM0LC0yNy4zMyAxNS4wNywwIDI3LjMzLDEyLjI2MSAyNy4zMywyNy4zMyBDIDI3LjMzLC0xMi4yNiAxNS4wNywwIDAsMCIgLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"
};

// Website URLs for each company
const COMPANY_WEBSITES = {
    msc: "www.msc.com",
    til: "tilgroup.com",
    medlog: "medlog.com"
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    // Set default website
    document.getElementById("website").value = COMPANY_WEBSITES.msc;
    
    // Set up company radio button event listeners
    document.querySelectorAll('input[name="company"]').forEach(radio => {
        radio.addEventListener("change", function() {
            const company = this.value;
            document.getElementById("website").value = COMPANY_WEBSITES[company];
            updateLogoDisplay();
        });
    });
    
    // Generate default QR code
    updateQRDisplay(true);
});

// Generate QR code based on form data
function generateQR() {
    updateQRDisplay(false);
}

// Reset form and QR code
function resetForm() {
    document.getElementById("vcardForm").reset();
    document.getElementById("website").value = COMPANY_WEBSITES.msc;
    document.querySelector('input[name="company"][value="msc"]').checked = true;
    updateQRDisplay(true);
}

// Update QR code display
function updateQRDisplay(useDefault) {
    const company = document.querySelector('input[name="company"]:checked').value;
    
    // Generate vCard QR code URL
    let qrApiUrl;
    if (useDefault) {
        // Default demo data
        qrApiUrl = "https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?text=BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3AJohn%20Doe%0AN%3ADoe%3BJohn%3B%3B%3B%0AEMAIL%3Ajohn.doe%40example.com%0ATEL%3A%2B1234567890%0AURL%3Awww.example.com%0AEND%3AVCARD";
    } else {
        const vCardData = createVCardData();
        const encodedData = encodeURIComponent(vCardData);
        
        if (company === "medlog") {
            qrApiUrl = `https://qr-code-generator-romain-eghpcgd2drhje2bw.canadacentral-01.azurewebsites.net/generate?text=${encodedData}`;
        } else {
            qrApiUrl = `https://qr-code-generator-romain-v2-dtezhae4hjbpeyd2.westeurope-01.azurewebsites.net/generate?text=${encodedData}`;
        }
    }
    
    // Update QR image
    document.getElementById("qrImage").src = qrApiUrl;
    
    // Update logo display
    updateLogoDisplay();
}

// Create vCard data from form inputs
function createVCardData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    
    return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${firstName} ${lastName}`,
        `N:${lastName};${firstName};;;`,
        `EMAIL:${email}`,
        `TEL:${phone}`,
        `URL:${website}`,
        "END:VCARD"
    ].join("\n");
}

// Update logo in QR code
function updateLogoDisplay() {
    const company = document.querySelector('input[name="company"]:checked').value;
    const logoContainer = document.getElementById("logoContainer");
    
    // Clear previous logo
    logoContainer.innerHTML = "";
    
    // Only show logo for MSC and TIL
    if (company === "msc" || company === "til") {
        const logoImg = document.createElement("img");
        logoImg.src = COMPANY_LOGOS[company];
        logoImg.alt = company.toUpperCase() + " Logo";
        logoContainer.appendChild(logoImg);
        logoContainer.style.display = "flex";
    } else {
        logoContainer.style.display = "none";
    }
}
