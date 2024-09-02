// Gameboard Vars
const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");
let white = true;
let letter = "ABCDEFGH";
let row = 1;
let col = 1;

let row_col_starting = "00";

// Go through and create the board on webpage load
for ( let i = 1; i < 65; i++) {
    // Create a square and add it to the square class
    let square = document.createElement("div");
    square.classList.add("square");

    // Determine to color the square white or black
    if (!white) {
        square.classList.add("black");
        square.classList.add("black_starting");
    } else {
        square.classList.add("white");
        square.classList.add("white_starting");
    }

    // Flip white variable after each square creation
    white = !white;

    // If we're at the end of a row, flip the white var again
    if (i%8 === 0) {
        white = !white;
    }

    // Give square a row and column id
    square.setAttribute("id", row + "" + col);
    col += 1;

    if(col > 8) {
        row += 1;
        col = 1;
    }

    // Add a listener for when the square is clicked on
    square.addEventListener("click", function(event) {
        // Check if a square already belongs to the green class, if so, set the class to 
        for (let i = 1; i <= 8; i++){
            for (let j = 1; j <= 8; j++) {
                var element = document.getElementById(i + "" + j);
                if (element.classList.contains("green")) {
                    // Remove the green class
                    element.classList.remove("green");

                    // Add previous color class to the square
                    if (element.classList.contains("black_starting")){
                        element.classList.add("black");
                    } else {
                        element.classList.add("white");
                    }
                }
            }
        }

        // Make the clicked square green
        if (event.target.classList.contains("black")) {
            event.target.classList.remove("black");
        } else {
            event.target.classList.remove("white");
        }

        event.target.classList.add("green");

        // Set the starting location var
        row_col_starting = event.target.id;
        console.log("Starting row and column: " + row_col_starting);
    });

    // Add the square to the gameboard.
    gameboard.appendChild(square);
}

// Add the numbers on the left side of the board
for (i = 8; i>=1; i--) {
    let numbersli = document.createElement("li");
    numbersli.textContent = i;
    numbers.appendChild(numbersli);
}

// Add the letters on the bottom of the board
for (i = 1; i<=8; i++) {
    let letterli = document.createElement("li");
    letterli.textContent = letter[i-1];
    letters.appendChild(letterli);
}

// console.log(gameboard);

// Solution strings to the 8 Queens problem where n=8
var solutions = [
    '15863724', '16837425', '17468253', '17582463', '24683175',
    '25713864', '25741863', '26174835', '26831475', '27368514',
    '27581463', '28613574', '31758246', '35281746', '35286471',
    '35714286', '35841726', '36258174', '36271485', '36275184',
    '36418572', '36428571', '36814752', '36815724', '36824175',
    '37285146', '37286415', '38471625', '41582736', '41586372',
    '42586137', '42736815', '42736851', '42751863', '42857136',
    '42861357', '46152837', '46827135', '46831752', '47185263',
    '47382516', '47526138', '47531682', '48136275', '48157263',
    '48531726', '51468273', '51842736', '51863724', '52468317',
    '52473861', '52617483', '52814736', '53168247', '53172864',
    '53847162', '57138642', '57142863', '57248136', '57263148',
    '57263184', '57413862', '58413627', '58417263', '61528374',
    '62713584', '62714853', '63175824', '63184275', '63185247',
    '63571428', '63581427', '63724815', '63728514', '63741825',
    '64158273', '64285713', '64713528', '64718253', '68241753',
    '71386425', '72418536', '72631485', '73168524', '73825164',
    '74258136', '74286135', '75316824', '82417536', '82531746',
    '83162574', '84136275'
];

// Helper function for random number
function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Test what solutions match the column and row for starting piece
function find_solution(col, row) {
    var possible_solutions = [];

    for (var i = 0; i < solutions.length; i++) {
        if (solutions[i].charAt(col-1) == row.toString()){
            // Add the solution to the array
            possible_solutions.push(solutions[i]);
        }
    }

    // Any solution from the list should work, just return a random solution.
    return possible_solutions[GetRandomInt(possible_solutions.length)]
}


// console.log(solutions);
// console.log(find_solution(5, 3));