function calculateCompatibility() {
    const birthdate1 = document.getElementById('birthdate1').value;
    const birthdate2 = document.getElementById('birthdate2').value;

    if (!birthdate1 || !birthdate2) {
        alert("Please enter both birthdates.");
        return;
    }

    const compatibility = calculateNumerologyCompatibility(birthdate1, birthdate2);
    displayCompatibilityDescription(compatibility);
}

function calculateNumerologyCompatibility(date1, date2) {
    // Simplified numerology calculation
    const sum1 = date1.split('-').join('').split('').reduce((a, b) => a + parseInt(b), 0);
    const sum2 = date2.split('-').join('').split('').reduce((a, b) => a + parseInt(b), 0);

    // Calculate compatibility as a percentage
    const compatibility = (sum1 + sum2) % 100;
    return compatibility;
}

function displayCompatibilityDescription(score) {
    const descriptions = [
        "A Cosmic Connection: Your bond transcends the mundane, hinting at a cosmic connection that has spanned lifetimes. Cherish the depth of this union. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Twin Flames Aflame: The intensity of your connection burns brightly, a beacon for profound emotional and spiritual growth. Embrace the journey ahead. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Harmonious Souls: Your compatibility score reveals a harmonious alignment of souls, suggesting a partnership that can bring balance and peace to your lives. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "A Journey of Growth: Together, you embark on a journey of mutual growth, learning, and understanding. Each challenge is a step towards a deeper connection. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Eternal Companions: Your paths are intertwined, with a bond that suggests you are eternal companions. This journey is just another chapter in your shared saga. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Mirrored Souls: In each other, you find a mirror, reflecting back the strengths and challenges within. This is a relationship that promises personal evolution. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "A Dance of Energies: Your compatibility score hints at a dynamic dance of energies, where balance, rhythm, and harmony create the music of your relationship. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Unseen Ties: The ties that bind you are woven from the unseen fabric of the universe, hinting at a deep, spiritual connection that defies explanation. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "A Union of Light: Together, you radiate light, illuminating the path for each other. Your bond is a beacon of hope and inspiration. Your journey goes beyond the surface — but to truly understand the depth, you need to know more.",
        "Soulful Resonance: Your souls resonate at a frequency that sings of shared destiny and profound understanding. This is a connection that goes beyond the surface."
    ];

    // Select a random description
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    const randomDescription = descriptions[randomIndex];

    // Link to the twin flame reading page
    const linkURL = "https://www.soulmatesdrawings.com/products/draw-my-twin-flame";
    const linkText = "Get your twin flame reading and learn more.";

    // Display the score, description, and link
    document.getElementById('result').innerHTML = `Compatibility Score: ${score}%<br>${randomDescription}<br><a href="${linkURL}" target="_blank">${linkText}</a>`;
}
