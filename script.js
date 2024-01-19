function calculateCompatibility() {
    const birthdate1 = document.getElementById('birthdate1').value;
    const birthdate2 = document.getElementById('birthdate2').value;

    if (!birthdate1 || !birthdate2) {
        alert("Please enter both birthdates.");
        return;
    }

    const compatibility = calculateNumerologyCompatibility(birthdate1, birthdate2);
    document.getElementById('result').innerText = `Compatibility Score: ${compatibility}%`;
}

function calculateNumerologyCompatibility(date1, date2) {
    // Simplified numerology calculation
    const sum1 = date1.split('-').join('').split('').reduce((a, b) => a + parseInt(b), 0);
    const sum2 = date2.split('-').join('').split('').reduce((a, b) => a + parseInt(b), 0);

    // Calculate compatibility as a percentage
    const compatibility = (sum1 + sum2) % 100;
    return compatibility;
}
