function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is spot available?
      if (grid[i][j] == "") {
        grid[i][j] = ai;
        let score = minimax(grid, false);
        grid[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = {
            i,
            j
          };
        }
      }
    }
  }
  grid[move.i][move.j] = ai;
  currentPlayer = human;
}

const scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(grid, isMaximizing) {
  const result = checkWinner();
  if (result != null) return scores[result];

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is spot available?
        if (grid[i][j] == "") {
          grid[i][j] = ai;
          let score = minimax(grid, false);
          grid[i][j] = "";
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is spot available?
        if (grid[i][j] == "") {
          grid[i][j] = human;
          let score = minimax(grid, true);
          grid[i][j] = "";
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}