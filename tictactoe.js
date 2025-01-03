var xPlayer = "X";
var yPlayer = "O";
var currentPlayer = xPlayer;
var gameOver = false;
var rows = 3;

window.onload = function() {
    setGame();
}

function setGame(){
    board = [];
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < rows; c++){
            row.push(" "); 

            // Create a new div for each tile
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString(); // Assign a unique ID to each tile
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}