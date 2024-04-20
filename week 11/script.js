const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (e) => {
    const cell = e.target;
    const cellIndex = parseInt(cell.id.split('-')[1]);

    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    checkGameStatus();
    togglePlayer();
};

const checkGameStatus = () => {
    const winner = checkWinner();

    if (winner) {
        status.textContent = `Player ${winner} wins!`;
        gameActive = false;
        return;
    }

    if (![...cells].some(cell => cell.textContent === '')) {
        status.textContent = "It's a tie!";
        gameActive = false;
        return;
    }

    status.textContent = `Player ${currentPlayer}'s turn`;
};

const checkWinner = () => {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;

        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return cells[a].textContent;
        }
    }

    return null;
};

const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    cells.forEach(cell => {
        cell.textContent = '';
    });

    status.textContent = '';
    currentPlayer = 'X';
    gameActive = true;
};

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
