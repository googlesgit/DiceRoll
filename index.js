function rollDice(){
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imagePath1 = "./images/dice"+randomNumber1+".png";
var imagePath2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imagePath1);
document.querySelector(".img2").setAttribute("src",imagePath2);

//to manipulate heading- h1

var heading = document.querySelector("h1");
    if(randomNumber1>randomNumber2){
        heading.textContent= "🚩Player 1 Wins!";
    }
    else if(randomNumber1<randomNumber2){
        heading.textContent="Player 2 Wins!🚩";
    }
    else {
        heading.textContent= "Its a draw!";
    }
}

rollDice();

