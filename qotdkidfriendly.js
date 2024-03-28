// List of phrases
var quotes = [
    "I am smoking hot gamer girl - Apricity55",
    "Shawty I dont like when you put your hand there - Apricity55",
    "Bros the toe collector - Sundreesoro55",
    "Why is it in spanish I dont speak taco - Sundreesoro55's GF",
    "They taste good in my mouth - Nerd55",
    "Chase a check, never chase a woman - Some rapper idk",
    "EL NACHO TACO - Miguel",
    "The smaller the circle the better the people - Ricky",
];

// Function to display a random phrase
function qotd() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote;
}

// Call the function when the page loads
window.onload = qotd;
