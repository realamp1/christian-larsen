// List of phrases
var quotes = [
    "HE'S ROTATING IN KIDS - Nerd55",
    "I'm just grabbing my balls at this point - Kairos55",
    "My dick is like ice spice - Apricity55",
    "This is some real chicken samwhich shit ni**a - Apricity55",
    "I am smoking hot gamer girl - Apricity55",
    "Shawty I dont like when you put your hand there - Apricity55",
    "Bros the toe collector - Sundreesoro55",
    "Why is it in spanish I dont speak taco - Sundreesoro55's GF",
    "They taste good in my mouth - Nerd55",
    "IM PRESSING THE N KEY FOR NI**ER! - Potato",
    "That's because real men love femboys - Some standard random",
    "Chase a check, never chase a woman - Some rapper idk",
    "Real Ni**as dont need umblellas - Thomas",
    "Marvel is a pretty cool ni**er, he'd be good at... slavery - Potato",
    "oh bust - Sundreesoro55",
    "Wiggity wigger, fuck that ni**er - Nathan",
    "If you can make her giggle, then you can make that ass clap an jiggle - Nathan",
    "EL NACHO TACO - Miguel",
    "The smaller the circle the better the people - Ricky",
];

// Function to display a random phrase
function qotd() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote;
}

function kidfriendly() {
    window.location.href = 'https://christian-larsen.vercel.app/quotes-kidfriendly.html';
}