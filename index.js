
let button = document.getElementById("button");
button.addEventListener('click', function(){
// Figuring out winner

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let img1 = document.querySelector(".dice .img1");
let img2 = document.querySelector(".dice .img2");

let path1 = "images/dice" + randomNumber1 + ".png";
let path2 = "images/dice" + randomNumber2 + ".png";

img1.setAttribute("src", path1);
img2.setAttribute("src", path2);

// Displaying Result in Header

let winnerDeclarations = ["Player 1 wins!", "Player 2 wins!", "It's a tie!"];
let winner;

if (randomNumber1 > randomNumber2) {
    winner = winnerDeclarations[0];
} else if (randomNumber1 < randomNumber2) {
    winner = winnerDeclarations[1];
} else {
    winner = winnerDeclarations[2];
}

let head = document.querySelector("h1");
head.innerHTML = winner;
button.innerHTML = "Go Again?";
});


