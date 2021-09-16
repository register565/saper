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
      }
      cells.push(cell);
      cell.el.addEventListener('click', () => {
        if (cell.isBomb === true) {
          cell.el.classList.add('bomb');
          alert('вы проиграли');
        } else {
          cell.el.innerText = cell.number;
          cell.el.classList.add('ccc');
        }
        console.log('CELL row/col', cell.row, cell.col, cell.isBomb, cell.number);
      });
    }
  }

  for (const cell of cells) {
    const leftCell = cells.find((item) => item.row === cell.row && item.col === cell.col - 1);
    const rightCell = cells.find((item) => item.row === cell.row && item.col === cell.col + 1);
    const topCell = cells.find((item) => item.row === cell.row - 1 && item.col === cell.col );
    const botCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col );
    const RTCell = cells.find((item) => item.row === cell.row -1 && item.col === cell.col + 1);
    const LTCell = cells.find((item) => item.row === cell.row - 1 && item.col === cell.col - 1);
    const RBCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col + 1);
    const LBCell = cells.find((item) => item.row === cell.row + 1 && item.col === cell.col - 1);
    
    let count = 0;
    if (leftCell?.isBomb) count += 1;
    if (rightCell?.isBomb) count += 1;
    if (topCell?.isBomb) count += 1;
    if (botCell?.isBomb) count += 1;
    if (RTCell?.isBomb) count += 1;
    if (LTCell?.isBomb) count += 1;
    if (RBCell?.isBomb) count += 1;
    if (LBCell?.isBomb) count += 1;

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




// math.floor(math.random() * 2)

// function RndBomb() {
//   cells.push(bombNumber)
//   BombRandom[math.floor(math.random() * 2)]
//   if (BombRandom) {
//     if (cell = 0);
//   }
// }