let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// create colour random order
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// light up the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('drawn');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('drawn');
    }, number + 200);
}

// check if the buttons clicked are the same as the order generated in the game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Score: ${score}\nYou got it right! Starting next level!`);
        nextLevel();
    }
}

// function for user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// color return function
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// function for next game level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// function of game over
let gameOver = () => {
    alert(`Score: ${score}!\nYou lost the game!\nClick OK to start a new game.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// function responsible for starting the game
let playGame = () => {
    alert('Welcome to the Genius! Starting new game!');
    score = 0;

    nextLevel();
}

// clcik event to the colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// start of the game
playGame();