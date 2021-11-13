import { checkHit } from "./board.mjs";
import { shuffleArray } from "./util.mjs";

export function checkShip(board, x, y) {
  return board.ships.find((ship) => ship.x === x && ship.y === y);
}

export function placeRandomShip(board) {
  const candidateFields = [];
  for (let x = 0; x < board.width; x++) {
    for (let y = 0; y < board.height; y++) {
      if (!checkHit(board, x, y) && !checkShip(board, x, y)) {
        candidateFields.push({ x, y });
      }
    }
  }
  if (candidateFields.length === 0) {
    console.log("No more fields to place ships");
  }
  shuffleArray(candidateFields);
  board.ships.push(candidateFields[0]);
}
