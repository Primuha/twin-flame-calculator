document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculate').addEventListener('click', function () {
        var yourName = document.getElementById('your-name').value;
        var yourDob = document.getElementById('your-dob').value;
        var partnerName = document.getElementById('partner-name').value;
        var partnerDob = document.getElementById('partner-dob').value;

        // Simple validation
        if (!yourName || !yourDob || !partnerName || !partnerDob) {
            alert('Please fill out all fields.');
            return;
        }

        // Here you would put your logic for calculating compatibility
        // For demonstration purposes, we'll just say they're compatible.
        var resultText = 'Congratulations, ' + yourName + ' and ' + partnerName + '! You are compatible.';
        
        document.getElementById('result').innerText = resultText;
    });
});
