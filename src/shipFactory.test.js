import { shipFactory } from "./shipFactory";

let testShip = shipFactory(3, 0, false)
let testShipSunk = shipFactory(3, 3, false)

test('hit() properly increments', () => {
  expect(testShip.hit()).toBe(1)
});

test('isSunk() calculates based on length and number of hits', () => {
  expect(testShipSunk.isSunk()).toBe(true)
});