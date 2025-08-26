// JavaScript code for handling contact form submission using Web3Forms API

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            access_key: '5682fa48-f05c-4638-9881-a21b6657f2ad',
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            message: formData.get('message')
        };
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        const messageElem = form.querySelector('.form-message');
        if (result.success) {
            messageElem.textContent = result.message;
            messageElem.style.color = 'green';
            form.reset();
        } else {
            messageElem.textContent = result.message || 'Something went wrong.';
            messageElem.style.color = 'red';
        }
    });
});
