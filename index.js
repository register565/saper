const startGameBtn = document.querySelector('#startGameBtn');
const difficultSelectBlock = document.querySelector('#difficultSelectBlock');
function buttonPressed() {
    startGameBtn.classList.add('hidden');
    difficultSelectBlock.classList.remove('hidden');
}

startGameBtn.addEventListener('click', buttonPressed);

const btn10 = document.querySelector('#btn10');
const btn20 = document.querySelector('#btn20');
const btn30 = document.querySelector('#btn30');
const gameBlock = document.querySelector('#gameBlock');

const cells = [];

function btn10Pressed() {
    renderGameField(10, 10);
}

function btn20Pressed() {
    renderGameField(20, 20);
}

function btn30Pressed() {
    renderGameField(30, 50);
}

function renderGameField(size, bombNumber) {
    const gameField = document.querySelector('#gameField');
    gameField.classList.add(`gameField${size}`);
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        for (let colIndex = 0; colIndex < size; colIndex++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            gameField.append(cellElement);
            const cell = {
                row: rowIndex,
                col: colIndex,
                el: cellElement,
                isBomb: false,
                number: 0,
            }
            cells.push(cell);
            cell.el.addEventListener('click', () => {
                console.log('CELL row/col', cell.row, cell.col, cell.isBomb, cell.number);

            });
        }
    }

    btn10.classList.add('hidden');
    btn20.classList.add('hidden');
    btn30.classList.add('hidden');
    gameField.classList.remove('hidden');
}


btn10.addEventListener('click', btn10Pressed);
btn20.addEventListener('click', btn20Pressed);
btn30.addEventListener('click', btn30Pressed);
