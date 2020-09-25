var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level=0;
var start=false;
$(document).keydown(function(){
if(!start){
    nextSequence();
    start=true;
}
});
function nextSequence() {
    userClickedPattern=[];
    document.querySelector("h1").innerHTML=("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    var pressedColour=document.querySelector("#"+randomChosenColour);
    pressedColour.classList.add("pressed");
    setTimeout(() => {
        pressedColour.classList.remove("pressed");
    }, 100);
    var newAudio= new Audio("sounds/"+randomChosenColour+".mp3");  
    newAudio.play();
    level=level+1;
}
 
$(".btn").click(
function() {
var userChosenColour=this.id;
userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
playsound(this.id);
checkAnswer(userClickedPattern.length-1)


});

function playsound(name) {
    
    var clickedColour=document.querySelector("#"+name);
   
    clickedColour.classList.add("pressed");
    setTimeout(() => {
        clickedColour.classList.remove("pressed");
    }, 100);
    var clickAudio= new Audio("sounds/"+name+".mp3");  
    clickAudio.play();
    
}
var i=0;
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]==userClickedPattern[currentLevel]) {
        if (gamePattern.length==userClickedPattern.length) {
             setTimeout(nextSequence,1000);    
        }
       
        // i=i+1
        // 
        // console.log("success");

        
    }
    else {
        var wrongAudio= new Audio("sounds/wrong.mp3");  
        wrongAudio.play();
        document.querySelector("h1").innerHTML="Game Over,Press any key to restart again";
        startOver();
        // break;
        // console.log("wrong");
    }

}
function startOver() {
    level=0;
        gamePattern=[];
        start=false;
}

