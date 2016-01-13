//  Document   : boxgame.js, for cs-portfolio
//  Created on : Wednesday, Jaunary 6, 2016, 15:02 PM
//  Author     : Adrielo (Audrey) Bongalon
//  Description: box game javascript file, for 10th grade computer science expeditions course


//                                      88
//                                      88
//                                      88
//    ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
//    ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
//    ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
//    88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
//    `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
//                                                                      d8'
//                                                                     d8'


var boxgamecanvas = document.getElementById("boxgamecanvas");                   // gets the canvas from the html and gives it a variable name
var ctx = boxgamecanvas.getContext("2d");                                       // tells the canvas that we're dealing with stuff in only two
                                                                                // dimensions

var clearCanvas = document.getElementById("clear-button");                      // creates variabe for the buttons
var resetPoint = document.getElementById("reset-button");

var boxSpeed = 2;                                                               // set the box speed
var box = {                                                                     // creates the box as an object
    xPos: 40,                                                                   // sets the starting x-position
    yPos: 40,                                                                   // ditto y-pos
    goUp: false,                                                                // defaults so that the box isn't moving
    goDown: false,
    goLeft: false,
    goRight: false,
    move: function(){
        if(box.goUp){
            box.yPos -= boxSpeed;                                               // "-=" means "equals itself minus", moves the box in the negative
        }                                                                       //     y-direction (up)
        if(box.goDown){
            box.yPos += boxSpeed;                                               // moves the box in the positive y-direction (down)
        }
        if(box.goLeft){
            box.xPos -= boxSpeed;                                               // moves the box in the negative x-direction (left)
        }
        if(box.goRight){
            box.xPos += boxSpeed;                                               // moves the box in the positive y-direction (right)
        }
        console.log(box.xPos);                                                  // logs the box coordinates
        console.log(box.yPos);
    },
    draw: function(){
        ctx.rect(box.xPos, box.yPos, 2, 2);
        ctx.stroke();
    }
}

document.addEventListener("keydown", function(evt){
   if(evt.keyCode === 38 || evt.keyCode === 190 || evt.keyCode === 86){         // key codes are in order: arrow keys, qwerty, dvorak
       box.goUp = true;
   }
   if(evt.keyCode === 40 || evt.keyCode === 188 || evt.keyCode === 87){
       box.goDown = true;
   }
   if(evt.keyCode === 37 || evt.keyCode === 90 || evt.keyCode === 186){
       box.goLeft = true;
   }
   if(evt.keyCode === 39 || evt.keyCode === 88 || evt.keyCode === 81){
       box.goRight = true;
   }
});

document.addEventListener("keyup", function(evt){
   if(evt.keyCode === 38 || evt.keyCode === 190 || evt.keyCode === 86){
       box.goUp = false;
   }
   if(evt.keyCode === 40 || evt.keyCode === 188 || evt.keyCode === 87){
       box.goDown = false;
   }
   if(evt.keyCode === 37 || evt.keyCode === 90 || evt.keyCode === 186){
       box.goLeft = false;
   }
   if(evt.keyCode === 39 || evt.keyCode === 88 || evt.keyCode === 81){
       box.goRight = false;
   }
});

function gameLoop(){
    ctx.beginPath();
    // ctx.clearRect(0, 0, boxgamecanvas.width, boxgamecanvas.height);          this originally got rid of the old boxes
    box.move();
    box.draw();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();                                                                     // runs the game loop

clearCanvas.addEventListener("click", function(){                               // clears the canvas when the button is clicked
    ctx.clearRect(0, 0, boxgamecanvas.width, boxgamecanvas.height);
});

resetPoint.addEventListener("click", function(){                                // resets the point when the button is clicked
    box.xPos = 40;
    box.yPos = 40;
});