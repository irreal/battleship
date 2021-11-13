import { gameOver, hitField, createBoard } from "./board.mjs";
import readLine from "./input.mjs";
import { placeRandomShip } from "./ship.mjs";
import { parseField } from "./field.mjs";

const board = createBoard(10, 10);

placeRandomShip(board);
placeRandomShip(board);

console.log(
  "Welcome to battleship! Input a location to hit in the form of a letter A-J and a number 1 to 10. eg C3"
);

while (!gameOver(board)) {
  const fieldString = await readLine("field to hit:");
  const field = parseField(fieldString);
  if (!field) {
    console.log(
      "Invalid field. Type a letter A-J followed by a number 1 to 10"
    );
    continue;
  }
  hitField(board, field.x, field.y);
}

console.log("The game is over! :)");
