export function checkHit(board, x, y) {
  return board.hits.find((hit) => hit.x === x && hit.y === y);
}

const map = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
};

export function parseField(fieldString) {
  if (!fieldString || fieldString.length < 2 || fieldString.length > 3) {
    return null;
  }
  const letter = fieldString[0].toLowerCase();
  const x = map[letter];
  if (x === undefined) {
    return null;
  }
  const y = parseInt(fieldString.substr(1), 10);
  if (isNaN(y) || y < 1 || y > 10) {
    return null;
  }
  return { x, y: y - 1 };
}
