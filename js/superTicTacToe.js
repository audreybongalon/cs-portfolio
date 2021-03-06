/*
       document : superTicTacToe.js, for cs-portfolio
     created on : thursday, september 29, 2016, 15:48 PM
         author : audrey
    description : javascript file for a super-tic-tac-toe game


                                      88
                                      88
                                      88
    ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
    ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
    ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
    88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
    `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
                                                                     d8'
                                                                    d8'
*/


var canvas = document.getElementById("stttCanvas");
var ctx = canvas.getContext("2d");

var i = 0;
var j = 0;
var turn = "x";








canvas.addEventListener("mousedown", onClick, true);

function onClick() {
    findMousePos(event);

    if (turn == "x") {
        turn = "o";
    }
    else {
        turn = "x";
    }

    showData();
}

function showData() {
    alert("x: " + mousex + "\n" + "y: " + mousey + "\n\n" + "turn: " + turn);
}








/*
                 ,8.       ,8.           ,o888888o.     8 8888      88    d888888o.   8 888888888888
                ,888.     ,888.       . 8888     `88.   8 8888      88  .`8888:' `88. 8 8888
               .`8888.   .`8888.     ,8 8888       `8b  8 8888      88  8.`8888.   Y8 8 8888
              ,8.`8888. ,8.`8888.    88 8888        `8b 8 8888      88  `8.`8888.     8 8888
             ,8'8.`8888,8^8.`8888.   88 8888         88 8 8888      88   `8.`8888.    8 8888888888
            ,8' `8.`8888' `8.`8888.  88 8888         88 8 8888      88    `8.`8888.   8 8888
           ,8'   `8.`88'   `8.`8888. 88 8888        ,8P 8 8888      88     `8.`8888.  8 8888
          ,8'     `8.`'     `8.`8888.`8 8888       ,8P  ` 8888     ,8P 8b   `8.`8888. 8 8888
         ,8'       `8        `8.`8888.` 8888     ,88'     8888   ,d8P  `8b.  ;8.`8888 8 8888
        ,8'         `         `8.`8888.  `8888888P'        `Y88888P'    `Y8888P ,88P' 8 888888888888
*/

var mousex;
var mousey;

function findMousePos(event) {
    if (event.x != undefined && event.y != undefined) {
        mousex = event.x;                                                       // defines position within window
        mousey = event.y;
    }
    else {                                                                      // Firefox method to get the position
        mousex = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mousey = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    mousex -= canvas.offsetLeft;                                                // resets position within canvas
    mousey -= canvas.offsetTop;
}
















/*
        8 888888888o        ,o888888o.           .8.          8 888888888o.   8 888888888o.
        8 8888    `88.   . 8888     `88.        .888.         8 8888    `88.  8 8888    `^888.
        8 8888     `88  ,8 8888       `8b      :88888.        8 8888     `88  8 8888        `88.
        8 8888     ,88  88 8888        `8b    . `88888.       8 8888     ,88  8 8888         `88
        8 8888.   ,88'  88 8888         88   .8. `88888.      8 8888.   ,88'  8 8888          88
        8 8888888888    88 8888         88  .8`8. `88888.     8 888888888P'   8 8888          88
        8 8888    `88.  88 8888        ,8P .8' `8. `88888.    8 8888`8b       8 8888         ,88
        8 8888      88  `8 8888       ,8P .8'   `8. `88888.   8 8888 `8b.     8 8888        ,88'
        8 8888    ,88'   ` 8888     ,88' .888888888. `88888.  8 8888   `8b.   8 8888    ,o88P'
        8 888888888P        `8888888P'  .8'       `8. `88888. 8 8888     `88. 8 888888888P'
*/

var bigBoardLineThickness = 10;
var bigBoardBuffer = 15;
var bigBoardColour = "#4a0066";

var workAreaWidth = canvas.width - (2 * bigBoardBuffer);
var workAreaHeight = canvas.height - (2 * bigBoardBuffer);

function drawBigBoard() {
    // left vertical line
    ctx.beginPath();
    ctx.lineWidth = bigBoardLineThickness;
    ctx.strokeStyle = bigBoardColour;
    ctx.moveTo((workAreaWidth / 3) + bigBoardBuffer, bigBoardBuffer);
    ctx.lineTo((workAreaWidth / 3) + bigBoardBuffer, canvas.height - bigBoardBuffer);
    ctx.stroke();

    // right vertical line
    ctx.beginPath();
    ctx.moveTo((2 * (workAreaWidth / 3)) + bigBoardBuffer, bigBoardBuffer);
    ctx.lineTo((2 * (workAreaWidth / 3)) + bigBoardBuffer, canvas.height - bigBoardBuffer);
    ctx.stroke();

    // top horizontal line
    ctx.beginPath();
    ctx.moveTo(bigBoardBuffer, (workAreaHeight / 3) + bigBoardBuffer);
    ctx.lineTo(canvas.width - bigBoardBuffer, (workAreaHeight / 3) + bigBoardBuffer);
    ctx.stroke();

    // bottom horizontal line
    ctx.beginPath();
    ctx.moveTo(bigBoardBuffer, (2 * (workAreaHeight / 3)) + bigBoardBuffer);
    ctx.lineTo(canvas.width - bigBoardBuffer, (2 * (workAreaHeight / 3)) + bigBoardBuffer);
    ctx.stroke();
}




var smolBoardLineThickness = 5;
var smolBoardBuffer = 5;
var edgeBuffer = (bigBoardLineThickness / 2) + smolBoardBuffer;
var smolBoardColour = "#9403d2";

// draws grid, then erases spaces where lines shouldn't be
function drawSmolBoards() {
    ctx.lineWidth = smolBoardLineThickness;
    ctx.strokeStyle = smolBoardColour;

    // draws the grid
    // note: the smol boards look lopsided if you don't put in the edge buffer
    for (i = 0; i < 8; i++) {
        // vertical lines
        ctx.beginPath();
        ctx.moveTo(bigBoardBuffer + ((i + 1) * (workAreaWidth / 9)), bigBoardBuffer + edgeBuffer);
        ctx.lineTo(bigBoardBuffer + ((i + 1) * (workAreaWidth / 9)), canvas.height - bigBoardBuffer - edgeBuffer);
        ctx.stroke();

        // horizontal lines
        ctx.beginPath();
        ctx.moveTo(bigBoardBuffer + edgeBuffer, bigBoardBuffer + ((i + 1) * (workAreaHeight / 9)));
        ctx.lineTo(canvas.width - bigBoardBuffer - edgeBuffer, bigBoardBuffer + ((i + 1) * (workAreaHeight / 9)));
        ctx.stroke();
    }

    // clears in this order: left vertical, right vertical, top horizontal, bottom horizontal
    ctx.clearRect(bigBoardBuffer + (3 * (workAreaWidth / 9)) - (bigBoardLineThickness / 2) - smolBoardBuffer, 0,
                  bigBoardLineThickness + (2 * smolBoardBuffer), canvas.height);
    ctx.clearRect(bigBoardBuffer + (6 * (workAreaWidth / 9)) - (bigBoardLineThickness / 2) - smolBoardBuffer, 0,
                  bigBoardLineThickness + (2 * smolBoardBuffer), canvas.height);
    ctx.clearRect(0, bigBoardBuffer + (3 * (workAreaHeight / 9)) - (bigBoardLineThickness / 2) - smolBoardBuffer,
                  canvas.width, bigBoardLineThickness + (2 * smolBoardBuffer));
    ctx.clearRect(0, bigBoardBuffer + (6 * (workAreaHeight / 9)) - (bigBoardLineThickness / 2) - smolBoardBuffer,
                  canvas.width, bigBoardLineThickness + (2 * smolBoardBuffer));
}




// FOR DEVELOPMENT PURPOSES ONLY
// DO NOT RUN IN FINAL GAME
function drawGuides() {
    // red outer boundary lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#ff0000";
    ctx.rect(bigBoardBuffer, bigBoardBuffer, workAreaWidth, workAreaHeight);
    ctx.stroke();

    // yellow grid
    ctx.strokeStyle = "#ffff00";
    for (var g = 0; g < 8; g++) {
        // vertical lines
        ctx.beginPath();
        ctx.moveTo(bigBoardBuffer + ((g + 1) * (workAreaWidth / 9)), bigBoardBuffer);
        ctx.lineTo(bigBoardBuffer + ((g + 1) * (workAreaWidth / 9)), canvas.height - bigBoardBuffer);
        ctx.stroke();

        // horizontal lines
        ctx.beginPath();
        ctx.moveTo(bigBoardBuffer, bigBoardBuffer + ((g + 1) * (workAreaHeight / 9)));
        ctx.lineTo(canvas.width - bigBoardBuffer, bigBoardBuffer + ((g + 1) * (workAreaHeight / 9)));
        ctx.stroke();
    }
}
















/*
     ,o888888o.           .8.                   ,8.       ,8.          8 888888888888  8 888888888o    8 8888                  .8.    `8.`8888.      ,8'
    8888     `88.        .888.                 ,888.     ,888.         8 8888          8 8888    `88.  8 8888                 .888.    `8.`8888.    ,8'
 ,8 8888       `8.      :88888.               .`8888.   .`8888.        8 8888          8 8888     `88  8 8888                :88888.    `8.`8888.  ,8'
 88 8888               . `88888.             ,8.`8888. ,8.`8888.       8 8888          8 8888     ,88  8 8888               . `88888.    `8.`8888.,8'
 88 8888              .8. `88888.           ,8'8.`8888,8^8.`8888.      8 8888888888    8 8888.   ,88'  8 8888              .8. `88888.    `8.`88888'
 88 8888             .8`8. `88888.         ,8' `8.`8888' `8.`8888.     8 8888          8 888888888P'   8 8888             .8`8. `88888.    `8. 8888
 88 8888   8888888  .8' `8. `88888.       ,8'   `8.`88'   `8.`8888.    8 8888          8 8888          8 8888            .8' `8. `88888.    `8 8888
 `8 8888       .8' .8'   `8. `88888.     ,8'     `8.`'     `8.`8888.   8 8888          8 8888          8 8888           .8'   `8. `88888.    8 8888
    8888     ,88' .888888888. `88888.   ,8'       `8        `8.`8888.  8 8888          8 8888          8 8888          .888888888. `88888.   8 8888
     `8888888P'  .8'       `8. `88888. ,8'         `         `8.`8888. 8 888888888888  8 8888          8 888888888888 .8'       `8. `88888.  8 8888
*/

function Square(id, xPos, yPos) {                                               // object constructor for each smol space
    this.id = id;
    this.state = "e";   // "e" is for "empty"
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = workAreaHeight / 9;
    this.width = workAreaWidth / 9;

    this.drawX = function() {
        this.state = "x";
        alert("draw x");
    };                   

    this.drawO = function() {
        this.state = "o";
        alert("draw o");
    };
}

function Small(id, xPos, yPos) {
    this.id = id;
    this.xPos = xPos;
    this.yPos = yPos;
    this.winner = "none";       // if (winner = "none") {board is valid}
    this.board = [  [ [], [], [] ],
                    [ [], [], [] ],
                    [ [], [], [] ]  ];

    this.initialise = function() {
        var smolIDcounter = 0;

        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            this.board[i][j] = new Square(smolIDcounter, xPos, yPos);
          }
        }
    };

    this.detectWin = function() {
        // if (aoeu) {
        //     // win x
        // }
        // else if (aoeu) {
        //     // win o
        // }
    };
}








function draw() {
    drawSmolBoards();
    drawBigBoard();

    // drawGuides();
}

draw();

