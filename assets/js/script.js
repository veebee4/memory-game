const cards = document.querySelectorAll(".card"); // gets all cards with classname "card"

let isCardFlipped = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip'); // adds class 'flip' when clicked
    if (!isCardFlipped) {
        isCardFlipped = true;
        firstCard = this; // sets firstCard var to card just flipped
        return;
    }

    secondCard = this;
    isCardFlipped = false;

    checkMatch();
}

function checkMatch() {
    
}

cards.forEach(card => card.addEventListener("click", flipCard));
