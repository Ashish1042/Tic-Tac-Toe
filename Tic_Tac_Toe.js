/* var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
*/
var res = document.querySelector('#but');
var cells = document.querySelectorAll('td');

function restart() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
res.addEventListener("click",restart)
var one = document.querySelector('#one')
var two = document.querySelector('#two');

one.addEventListener("click",write1X)
two.addEventListener("click", write2X)
three.addEventListener("click", write3X)
four.addEventListener("click", write4X)
five.addEventListener("click", write5X)
six.addEventListener("click", write6X)
seven.addEventListener("click", write7X)
eight.addEventListener("click", write8X)
nine.addEventListener("click", write9X)

function write1X() {
  if (one.textContent === '') {
    one.textContent = 'X';
  }
  else if (one.textContent === 'X') {
    one.textContent = 'O';
  }
  else {
    one.textContent = '';
  }
}

function write2X() {
  if (two.textContent === '') {
    two.textContent = 'X';
  }
  else if (two.textContent === 'X') {
    two.textContent = 'O';
  }
  else {
    two.textContent = '';
  }
}
function write3X() {
  if (three.textContent === '') {
    three.textContent = 'X';
  }
  else if (three.textContent === 'X') {
    three.textContent = 'O';
  }
  else {
    three.textContent = '';
  }
}
function write4X() {
  if (four.textContent === '') {
    four.textContent = 'X';
  }
  else if (four.textContent === 'X') {
    four.textContent = 'O';
  }
  else {
    four.textContent = '';
  }
}
function write5X() {
  if (five.textContent === '') {
    five.textContent = 'X';
  }
  else if (five.textContent === 'X') {
    five.textContent = 'O';
  }
  else {
    five.textContent = '';
  }
}
function write6X() {
  if (six.textContent === '') {
    six.textContent = 'X';
  }
  else if (six.textContent === 'X') {
    six.textContent = 'O';
  }
  else {
    six.textContent = '';
  }
}
function write7X() {
  if (seven.textContent === '') {
    seven.textContent = 'X';
  }
  else if (seven.textContent === 'X') {
    seven.textContent = 'O';
  }
  else {
    seven.textContent = '';
  }
}
function write8X() {
  if (eight.textContent === '') {
    eight.textContent = 'X';
  }
  else if (eight.textContent === 'X') {
    eight.textContent = 'O';
  }
  else {
    eight.textContent = '';
  }
}
function write9X() {
  if (nine.textContent === '') {
    nine.textContent = 'X';
  }
  else if (nine.textContent === 'X') {
    nine.textContent = 'O';
  }
  else {
    nine.textContent = '';
  }
}
