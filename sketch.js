const ai = "X";
const human = "O";
let currentPlayer = ai;
let grid;

let w;
let h;

function setup() {
  createCanvas(400, 500);
  w = width / 3;
  h = (height - 100) / 3;

  grid = createGrid();

  bestMove();
}

function draw() {
  background(255);
  drawGrid();

  const result = checkWinner();
  if (result != null) {
    if (result == "tie") {
      textSize(32);
      fill(0);
      console.log(result + "Draw");
      text("Draw", 25, height - 50);
    } else {
      textSize(32);
      fill(0);
      console.log(result + " win!");
      text(result + " win!", 25, height - 50);
      noLoop();
    }
  }
}

function mousePressed() {
  if (currentPlayer == human) {
    // Human make turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // If valid turn
    if (grid[i][j] == "") {
      grid[i][j] = currentPlayer;
      currentPlayer = currentPlayer == ai ? human : ai;
      bestMove();
    }
  }
}