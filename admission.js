document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        course: formData.get('course'),
        timing: formData.get('timing'),
        mode: formData.get('mode')
    };

    // URL of your Google Apps Script web app
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxu8yYVG9wnWzNj8rLWzwpKUtus72zwHnCcr64i807B7hYjvKoPoDXKDyblTcq__2b8/exec';

    // Send the data to the Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
    .then(response => {
        alert('Form submitted successfully!');
        event.target.reset(); // Reset the form after submission
    })
    .catch(error => {
        alert('Error submitting form: ' + error.message);
    });
});
