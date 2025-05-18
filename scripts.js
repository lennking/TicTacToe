const game = (function() {
    const board = ['','','','','','','','',''];
    let letter = true;
    function createPlayer(id){
        return { id: id, score: 0 };
    };
    const player1 = createPlayer(1);
    const player2 = createPlayer(2);

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
        renderScore();
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
        setTimeout(checkWin, 50);
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
                //check who won
                if (board[a] === 'X') player1.score++;
                if (board[a] === 'O') player2.score++;
                renderScore();
                setTimeout(() => {
                    alert(`${board[a]} wins!`);
                }, 50);
                return;
            }
        };
    };
    function renderScore() {
        const scoreBoard = document.getElementById('scoreBoard');
        scoreBoard.innerHTML = `Player ${player1.id}: ${player1.score}<br>
                                Player ${player2.id}: ${player2.score}
                                `;
    };
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


game.renderBoard();