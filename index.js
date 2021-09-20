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

const gameOver = document.querySelector('#GameOver');
const btnOver = document.querySelector('#btnOver');
          function btnOverPressed(){
            window.location.reload(false);

          }

btnOver.addEventListener('click', btnOverPressed);


const cells = [];

function btn10Pressed() {
  renderGameField(10, 10);
}

function btn20Pressed() {
  renderGameField(20, 50);
}

function btn30Pressed() {
  renderGameField(30, 100);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function renderGameField(size, maxBombNumber) {
  const gameField = document.querySelector('#gameField');
  gameField.classList.add(`gameField${size}`);

  let currentBombNumber = 0;

  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    for (let colIndex = 0; colIndex < size; colIndex++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      gameField.append(cellElement);

      const bombChance = getRandomIntInclusive(1, Math.floor((maxBombNumber / (size ** 2)) ** -1) - 1);
      let isBomb = bombChance <= 1;

      if (isBomb && currentBombNumber < maxBombNumber) currentBombNumber += 1;
      else isBomb = false;

      const cell = {
        row: rowIndex,
        col: colIndex,
        el: cellElement,
        isBomb: isBomb,
        number: 0,
        isOpen: false,
        
      }
      function lock() {
         gameField.subtract('click', listener);
      }
      cells.push(cell);
      const listener = () => {
        cell.isOpen = true;
        if (cell.isBomb === true) {
          cell.el.classList.add('bomb');
          gameOver.classList.remove('hidden');
         lock();
       

        } else {
          cell.el.innerText = cell.number;
          if (cell.number === 0) cell.el.classList.add('numbers1');
          if (cell.number === 1) cell.el.classList.add('numbers2');
          if (cell.number === 2) cell.el.classList.add('numbers3');
          if (cell.number === 3) cell.el.classList.add('numbers4');
          if (cell.number === 4) cell.el.classList.add('numbers5');
          if (cell.number === 5) cell.el.classList.add('numbers6');
          if (cell.number === 0) openAroundCells(cell);

        }
        console.log('CELL row/col', cell.row, cell.col, cell.isBomb, cell.number);
      };
      cell.el.addEventListener('click', listener);
      
    }
  }

  for (const cell of cells) {
    const leftCell = cells.find((item) => item.row === cell.row && item.col === cell.col - 1);
    const rightCell = cells.find((item) => item.row === cell.row && item.col === cell.col + 1);
    const topCell = cells.find((item) => item.row === cell.row - 1 && item.col === cell.col);
    const botCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col);
    const RTCell = cells.find((item) => item.row === cell.row - 1 && item.col === cell.col + 1);
    const LTCell = cells.find((item) => item.row === cell.row - 1 && item.col === cell.col - 1);
    const RBCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col + 1);
    const LBCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col - 1);

    const cellsAround = getCellsAround(cell.col, cell.row);

    let count = 0;
    if (cellsAround.left?.isBomb) count += 1;
    if (cellsAround.right?.isBomb) count += 1;
    if (cellsAround.top?.isBomb) count += 1;
    if (cellsAround.bottom?.isBomb) count += 1;
    if (cellsAround.rightTop?.isBomb) count += 1;
    if (cellsAround.leftTop?.isBomb) count += 1;
    if (cellsAround.rightBottom?.isBomb) count += 1;
    if (cellsAround.leftBottom?.isBomb) count += 1;

    cell.number = count;
  }

  console.log(cells.filter((cell) => cell.isBomb).length);
  btn10.classList.add('hidden');
  btn20.classList.add('hidden');
  btn30.classList.add('hidden');
  gameField.classList.remove('hidden');
}


btn10.addEventListener('click', btn10Pressed);
btn20.addEventListener('click', btn20Pressed);
btn30.addEventListener('click', btn30Pressed);

function getCellsAround(x, y) {
  const result = {};
  for (const cell of cells) {
    if (cell.row === y && cell.col === x - 1) result.left = cell;
    if (cell.row === y && cell.col === x + 1) result.right = cell;
    if (cell.row === y - 1 && cell.col === x) result.top = cell;
    if (cell.row === y + 1 && cell.col === x) result.bottom = cell;
    if (cell.row === y - 1 && cell.col === x + 1) result.rightTop = cell;
    if (cell.row === y - 1 && cell.col === x - 1) result.leftTop = cell;
    if (cell.row === y + 1 && cell.col === x + 1) result.rightBottom = cell;
    if (cell.row === y + 1 && cell.col === x - 1) result.leftBottom = cell;
  }

  return result;
}

function openAroundCells(cell) {
  const cellsAround = getCellsAround(cell.col, cell.row);
  console.log(cellsAround);
  sideToCells(cellsAround.left);
  sideToCells(cellsAround.right);
  sideToCells(cellsAround.top);
  sideToCells(cellsAround.bottom);
  sideToCells(cellsAround.rightTop);
  sideToCells(cellsAround.leftTop);
  sideToCells(cellsAround.rightBottom);
  sideToCells(cellsAround.leftBottom);
}

function sideToCells(cell) {
  if (cell == null) return;
  if (cell.isOpen) return;

  cell.isOpen = true;
  cell.el.innerText = cell.number;
  cell.el.classList.add(`numbers${cell.number + 1}`);

  if (cell.number === 0) openAroundCells(cell);
}

