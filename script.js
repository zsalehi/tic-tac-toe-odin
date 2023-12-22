
// Gameboard state 
function Gameboard() {
    const board = [];

    // create the Gameboard array, i = rows, j = columns 
    for (count = 1; count < 9; count++) {
        board[count] = [];
    }

    // create the board 
    const getBoard = () => board;

    // In order to drop a token, we need to know where on the board the user wishes to place the token. Therefore we need to know the column and the row and which player is playing.

    const dropToken = (row, column, player) => {
        // Our board's outermost array represents the row,
        // So we need to loop through the rows till we reach the desired row number,
        // Then we need to loop through all the columns till we reach the desired column number,
        // then we need to check that the space is not filled by a token


    }


}

/* 
** We need to add a value to each Cell on the board 
** 
*/


function Cell () {
    let value = 0;
    // add the player's token/marker to change the Cell.
    // const addToken = (player) => {
    //     value = player;
    // }  
}

// Player constructor to create new players when launching a game.
function Player (name) {
    this.name = name;
    this.token = name[0];
};

// GameController object to control flow of the game
function GameController () {
    
    // create the gameboard
    const board = Gameboard ();

    function createPlayers () {
        const playerOne = prompt("What is your name, Player 1?");
        const playerTwo = prompt("What is your name, Player 2?");

        return [ 
            new Player(playerOne), 
            new Player(playerTwo)
        ]
    }
    // Create the players
    const playersArr = createPlayers();
    let activePlayer = playersArr[0];

};

const game = GameController();