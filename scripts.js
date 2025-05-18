const game = (function() {
    const board = ['','','','','','','','',''];
    let letter = true;
    function createPlayer(number){
        return { id: number, score: 0 };
    };
    function renderBoard() {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.innerHTML= '';
        board.forEach((cellValue, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            //show X or O
            cell.textContent = cellValue;
            cell.addEventListener('click', () => handleClick(index));
            gameBoard.appendChild(cell);
        });
    };
    function handleClick(index) {
        //on empty cell
        if (board[index] === '') {
            if (letter == true) {
                board[index] = 'X';
            }
            else {
                board[index] = 'O';
            }
            letter = !letter;
        };
        renderBoard();
        checkWin();
    }
    function checkWin() {
        const winCombos = [
            //arrays of winning combinations
            [0,1,2], // top row
            [3,4,5], // middle row
            [6,7,8], // bottom row
            [0,3,6], // left column
            [1,4,7], // middle column
            [2,5,8], // right column
            [0,4,8], // main diagonal
            [2,4,6]  // anti-diagonal
        ];
        for (const combo of winCombos) {
            //test each combo
            const [a, b, c] = combo;
            if (
                board[a] !== '' &&
                board[a] === board[b] &&
                board[b] === board[c]
            ) {
                alert("you wins");
            }
        };
    }
    return {
        renderBoard,
        createPlayer,
        playX: function(x) {
            board[x] = 'X';
            renderBoard();
        },
        playO: function(x) {
            board[x] = 'O';
            renderBoard();
        }
    };
})();

game.createPlayer(1);
game.createPlayer(2);
game.renderBoard();