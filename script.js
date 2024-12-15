document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            formMessage.textContent = data;
            formMessage.style.color = "green";
            form.reset(); // Clear the form
        })
        .catch(error => {
            formMessage.textContent = "There was an error sending your message.";
            formMessage.style.color = "red";
        });
});
