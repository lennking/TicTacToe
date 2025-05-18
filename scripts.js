const game = (function() {
    const board = ['','','','','','','','',''];
    const i = 0;
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
            board[index] = 'X';
        };
        renderBoard();
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