document.getElementById("emailForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Replace with your Logic App's HTTP POST URL
    const logicAppUrl = "https://prod-169.westeurope.logic.azure.com:443/workflows/e53a57ed36824c9ba96437ae88e075f3/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=QFKq6PLQkGAujuyr8JkgZ3jkUN7WcjbwiZeGrf3YXzY";

    try {
        const response = await fetch(logicAppUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        // Reset input field
        emailInput.value = '';

        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert-box ${response.ok ? 'success' : 'error'}`;
        
        const message = response.ok 
            ? `The business card for <strong>${email}</strong> has been successfully requested, you will shortly receive it by email`
            : 'Error requesting the business card, please try again later and send an email to <a href="mailto:support@test.com">support@test.com</a>';

        alertDiv.innerHTML = `
            ${message}
            <span class="close-btn">&times;</span>
        `;

        const alertContainer = document.getElementById('alertContainer');
        alertContainer.innerHTML = '';
        alertContainer.appendChild(alertDiv);

        // Auto-hide after 5 seconds
        setTimeout(() => alertDiv.remove(), 5000);

        // Close button handler
        alertDiv.querySelector('.close-btn').addEventListener('click', () => alertDiv.remove());

    } catch (error) {
        console.error("Error:", error);
        
        // Reset input field on error
        emailInput.value = '';

        const alertContainer = document.getElementById('alertContainer');
        alertContainer.innerHTML = `
            <div class="alert-box error">
                Error requesting the business card, please try again later and send an email to <a href="mailto:support@test.com">support@test.com</a>
                <span class="close-btn">&times;</span>
            </div>
        `;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            const errorAlert = document.querySelector('.alert-box.error');
            if (errorAlert) errorAlert.remove();
        }, 5000);
        
        // Close button handler for error alerts
        const closeButton = document.querySelector('.alert-box.error .close-btn');
        if (closeButton) closeButton.addEventListener('click', () => closeButton.parentElement.remove());
    }
});
