import { gameBoardFactory, _createGrid } from "./gameBoardFactory";

let gameBoard = gameBoardFactory();
let testCoords = [[0,0], [0,1], [0,2]];
gameBoard.placeShip(testCoords);

test('placeShip works', () => {
  expect(gameBoard.grid[0].ship).toBeTruthy();
});