document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.submit-btn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    const messageDiv = document.getElementById('form-message');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        topic: document.getElementById('topic').value,
        message: document.getElementById('message').value
    };
    
    // Disable button and show loading
    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    messageDiv.style.display = 'none';
    
    try {
        // Create mailto link (this opens email client)
        const subject = encodeURIComponent(`Kontakt: ${formData.topic}`);
        const body = encodeURIComponent(
            `Navn: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Emne: ${formData.topic}\n\n` +
            `Besked:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:kornfri@outlook.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Show success message
        messageDiv.textContent = 'Din emailklient er blevet åbnet. Send venligst beskeden derfra.';
        messageDiv.className = 'form-message success';
        
        // Reset form
        this.reset();
        
    } catch (error) {
        // Show error message
        messageDiv.textContent = 'Der opstod en fejl. Prøv venligst igen eller send direkte til kornfri@outlook.com';
        messageDiv.className = 'form-message error';
    } finally {
        // Re-enable button
        btn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
});