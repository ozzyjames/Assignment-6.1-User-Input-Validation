// Function to validate the form
function validateForm() {
    console.log("validateForm function called"); // Debugging message

    // Get the input elements
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const zipCode = document.getElementById('zip-code');
    
    // Get the error message elements
    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const zipCodeError = document.getElementById('zip-code-error');
    const secretMessage = document.getElementById('secret-message');
    
    // Combine first name and last name
    const fullName = `${firstName.value.trim()} ${lastName.value.trim()}`;
    console.log("Full name:", fullName); // Debugging message
    
    // Validation flags
    let isValid = true;
    
    // Validate first name
    if (firstName.value.trim() === '') {
        firstName.classList.add('error');
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstName.classList.remove('error');
        firstNameError.style.display = 'none';
    }
    
    // Validate last name
    if (lastName.value.trim() === '') {
        lastName.classList.add('error');
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastName.classList.remove('error');
        lastNameError.style.display = 'none';
    }
    
    // Validate full name length
    if (fullName.length > 20) {
        alert('Full name must be 20 characters or less.');
        isValid = false;
    }
    
    // Validate zip code
    const zipCodePattern = /^\d{5}$/;
    if (!zipCodePattern.test(zipCode.value)) {
        zipCode.classList.add('error');
        zipCodeError.style.display = 'block';
        isValid = false;
    } else {
        zipCode.classList.remove('error');
        zipCodeError.style.display = 'none';
    }
    
    // If all inputs are valid, show the secret message
    if (isValid) {
        secretMessage.style.display = 'block';
        console.log("Form is valid. Secret message shown."); // Debugging message
    } else {
        secretMessage.style.display = 'none';
        console.log("Form is invalid."); // Debugging message
    }
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    console.log("Submit button clicked"); // Debugging message
    // Validate the form
    validateForm();
});
