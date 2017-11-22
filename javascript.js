var word="";
var usedLetters = "";
var lives = 7;
var wins = 0;
var games = 0;
var losses= 0;

function arrayStart() {
    document.getElementById("Guess").disabled = true;
    level = prompt("Easy, medium or hard?");
    var display = "";
    var easy = ["horse", "cow", "lion", "bird", "dog", "audi", "bmw","nissan","honda","ford"];
    var medium = ["llama", "jaguar", "beaver", "cheetah", "monkey", "toyota", "mazda","lexus", "acura", "subaru"];
    var hard = ["aardvark", "baboon", "elephant", "barracuda", "antelope", "mitsubishi", "maserati","volkswagen","lamborghini","bugatti"];

    if (level === "easy") {
        var rnum = Math.floor(Math.random() * 10);
        word = easy[rnum];
        easy.splice(rnum,1);
        document.getElementById("Guess").disabled = false;
    }
    if (level === "medium") {
        var bnum = Math.floor(Math.random() * 10);
        word = medium[bnum];
        medium.splice(bnum,1);
        document.getElementById("Guess").disabled = false;
    }
    if (level === "hard") {
        var fnum = Math.floor(Math.random() * 10);
        word = hard[fnum];
        hard.splice(fnum,1);
        document.getElementById("Guess").disabled = false;
    }
    for (i = 0; i < word.length; i++) {
        display = display + " _ ";
    }

    if (word === "horse" || word === "cow" || word === "lion" || word === "bird" || word === "dog"||word === "llama" || word === "jaguar" || word === "beaver" || word === "cheetah" || word === "monkey"||word === "aardvark" || word === "baboon" || word === "elephant" || word === "barracuda" || word === "antelope") {
        document.getElementById("output2").innerHTML = "Animals";

    }

    if (word === "audi" || word === "bmw" || word === "nissan" || word === "honda" || word === "ford"||word === "toyota" || word === "mazda" || word === "lexus" || word === "acura" || word === "subaru"||word === "mitsubishi" || word === "maserati" || word === "volkswagen" || word === "lamborghini" || word === "bugatti") {
        document.getElementById("output2").innerHTML = "Cars";
    }
    document.getElementById("output").innerHTML = display;
}
function displayWord(){
    var display = "";
    for (i = 0; i < word.length; i++) {
        var found = false;
        for (j = 0; j < usedLetters.length; j++) {
            if (word.substring(i, i + 1) === usedLetters.substring(j, j + 1)) {
                display = display + usedLetters.substring(j, j + 1) + " ";
                found = true;
            }
        }
        if (found === false) {
            display = display + " _ ";
        }
    }
    document.getElementById("output").innerHTML = display;
    document.getElementById("display").innerHTML = usedLetters;

    return (display.indexOf("_")<0);//more matches to be found
}

function enterValue(){
    document.getElementById("Start").disabled = true;
    var goodGuess = true;
    var allFound = false;
    var guess = prompt("Guess a letter").toLowerCase();
    if (guess.length !== 1){
        goodGuess = false;
        alert("Enter 1 letter at a time");
    }

    if(guess.charCodeAt(0)<97||guess.charCodeAt(0)>122){
        alert("Guess a letter");
        goodGuess=false;
    }

    if(usedLetters.indexOf(guess)>=0){
        goodGuess = false;
        alert("You have already entered this letter");
    }
    if(goodGuess === true){
        usedLetters = usedLetters + guess;
        allFound = displayWord();
    }
    if (word.indexOf(guess) < 0) {
        lives = lives - 1;
    }
    setImageBasedOnLives();

    if(allFound){
        alert("You Won!");
        wins=wins+1;
        games=games+1;
        showStats();
        clearScreen();
    }else if (lives === 0){
        setImageBasedOnLives();
        alert("You Lose!");
        losses = losses+1;
        games = games+1;
        showStats();
        clearScreen();
    }
}
function showStats() {
    document.getElementById("output3").innerHTML = "Number 0f Wins: " + wins;
    document.getElementById("output4").innerHTML = "Number 0f Losses: " + losses;
    document.getElementById("output5").innerHTML = "Number 0f Games: " + games;

}
function setImageBasedOnLives(){
    //var pics=["hang1.gif","hang2.gif","hang3.gif","hang4.gif","hang5.gif","hang6.gif","hang7.gif","hang8.gif"];
    var pics=["hang1.jpg","hang2.jpg","hang3.jpg","hang4.jpg","hang5.jpg","hang6.jpg","hang7.jpg","hang8.jpg"];

    document.getElementById("gallows").src ="resources/"+ pics[7-lives];
}
function clearScreen(){
    document.getElementById("output").innerHTML = null;
    document.getElementById("display").innerHTML = null;
    document.getElementById("output2").innerHTML = null;
    usedLetters = "";
    word = "";
    lives = 7;
    setImageBasedOnLives();
    document.getElementById("Start").disabled = false;
    document.getElementById("Guess").disabled = true;
}
function setBackground(selected) {
    document.body.style.backgroundImage="url("+selected.value+")";
}