let transitionActive = false;
var song = document.getElementById("song"); 

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const mainButtons = document.getElementById("main-container");
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);
    
    song.volume = 0;
    song.playbackRate = 0.85;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};

function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector(".display-text");
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.textContent = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startAbout() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector(".display-text");
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = "This website is owned by joyclen, and will likely be used for projects that are currently in the works or planned, such as discord bots. For more information, contact <a href='https://discord.com/users/1057310810440994967' target='_blank' style='color: white;'>joyclens</a> on Discord.";
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}




function getRandomSentence() {
    const sentences = [
        "It's worth wondering if sin even carries the same weight anymore. Are nefarious actions against a demonic and upside¬down world still punishable? And if so, are they punished a little less? The way I see it, sins are only sins when unleashed upon a world that doesn't deserve it — a world that you don't want to see hurt — better known as the previous world. To have disgraced the world when it was at its most beautiful was worthy of ample Helltime. But now, when the world is so ugly and itself unclean, how can you consider action against it as sin? I would go as far to claim that any action meant to collapse this place sooner, effectively making way for new life, would be considered holy — maybe even ordainable by a kind of state-aware papacy."
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_094.gif",
    ];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}
