import { checkShip } from "./ship.mjs";
export function createBoard(width, height) {
  return {
    width: width,
    height: height,
    ships: [],
    hits: [],
  };
}

export function gameOver(board) {
  if (!board.ships || board.ships.length === 0) {
    return true;
  }
  if (
    board.ships.find((ship) => {
      return !checkHit(board, ship.x, ship.y);
    })
  ) {
    return false;
  }
  return true;
}

export function checkHit(board, x, y) {
  return board.hits.find((hit) => hit.x === x && hit.y === y);
}

export function hitField(board, x, y) {
  if (x < 0 || x >= board.width || y < 0 || y >= board.height) {
    console.log("Out of bounds");
    return false;
  }
  if (checkHit(board, x, y)) {
    console.log("Already hit");
    return false;
  }
  board.hits.push({ x, y });
  const ship = checkShip(board, x, y);
  if (!ship) {
    console.log("miss");
    return false;
  }
  console.log("Hit");
  return true;
}
