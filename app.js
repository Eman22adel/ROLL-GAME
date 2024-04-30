'use strict';

//button control
let rollDice = document.querySelector('.rollDice');
let restgame = document.querySelector('.restgame');
let hold = document.querySelector('.hold');
// for random
let current = document.querySelectorAll('.current');
let drow = document.querySelector('.drow');
// player
let player = document.querySelectorAll('.player');
let total = document.querySelectorAll('.total');
let print_winner = document.querySelectorAll('.print_winner');
let random;

// restgame 
restgame.addEventListener('click', function () {
    restgame.setAttribute('disabled', true);
    let r = contactive();
    drow.src = '/img/dice.png';
    current[r].innerHTML = 0;
    player[0].classList.add('active');
    player[1].classList.remove('active');
    hold.removeAttribute('disabled');
    rollDice.removeAttribute('disabled');
    for (let i in print_winner) {
        player[i].classList.remove('winner');
        print_winner[i].textContent = '';
        total[i].textContent = 0
    }
});

// roll
rollDice.addEventListener('click', function () {
    random = Math.floor(Math.random() * 6) + 1;
    (random == 1) ? check(random) : currentrandom(contactive(), random);
});
// hold
hold.addEventListener('click', function () {
    let r = contactive();
    total[r].innerHTML = +total[r].textContent + +current[r].textContent;
    // check winner
    if (total[r].textContent >= 100) {
        player[r].classList.add('winner');
        print_winner[r].innerHTML = '🥳🏆 winner';
        hold.setAttribute('disabled', 'true');
        rollDice.setAttribute('disabled', 'true');
        restgame.removeAttribute('disabled');
    }
    check(random);
});
// check for any player playing now
function contactive() {
    let x;
    player.forEach((e, ind) => {
        if (e.classList.contains('active')) x = ind;
    });
    return x;
}
// function put the value of random in current
function currentrandom(x, rad) {
    current[x].innerHTML = +current[x].innerHTML + +rad;
    //drow.src = `img/dice-1.png`;
    drow.src = `img/dice-${rad}.png`;

}
// chaeck if number random is equal 1
function check(rad) {
    if (rad == 1) drow.src = `img/dice-${rad}.png`;
    for (let i in player) {
        player[i].classList.toggle("active");
        current[i].innerHTML = 0;
    }
}


