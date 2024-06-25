document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    const validUSPhoneNumberPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^1\s\d{3}\s\d{3}\s\d{4}$/,
        /^\d{10}$/,
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^1\d{3}\d{3}\d{4}$/
    ];

    let isValid = false;
    for (const pattern of validUSPhoneNumberPatterns) {
        if (pattern.test(userInput)) {
            isValid = true;
            break;
        }
    }

    resultsDiv.textContent = isValid ? `Valid US number: ${userInput}` : `Invalid US number: ${userInput}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});
