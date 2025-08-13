// Wait for DOM to be fully loaded
window.addEventListener('load', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.error("Contact form not found! Make sure the form with ID 'contact-form' exists.");
        return;
    }

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const formData = new FormData(event.target);
            
            // Add additional data if not present
            if (!formData.get('access_key')) {
                formData.append("access_key", "5682fa48-f05c-4638-9881-a21b6657f2ad");
            }
            if (!formData.get('to')) {
                formData.append("to", "azazmohammad14@gmail.com");
            }

            // Convert to object and then to JSON
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            // Submit to Web3Forms
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const result = await response.json();
            console.log("Form submission result:", result);

            if (result.success) {
                // Show success message
                alert("Thank you! Your message has been sent successfully.");
                // Reset form
                contactForm.reset();
            } else {
                throw new Error(result.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});