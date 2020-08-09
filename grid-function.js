function createGrid() {
  let grid = [];
  for (let i = 0; i < 3; i++) {
    grid[i] = [];
    for (let j = 0; j < 3; j++) {
      grid[i][j] = "";
    }
  }
  return grid;
}

function drawGrid() {
  strokeWeight(3);
  line(w, 0, w, height - 100);
  line(w * 2, 0, w * 2, height - 100);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      const x = w * i + w / 2;
      const y = h * j + h / 2;
      const r = w / 4;
      const spot = grid[i][j];
      if (spot == human) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == ai) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
}

function equals3(a, b, c) {
  return a == b && b == c && a != "";
}

function checkWinner() {
  let winner = null;
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }
  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }
  // Diagonal
  if (equals3(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (equals3(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] == "") {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return "tie";
  } else {
    return winner;
  }
}