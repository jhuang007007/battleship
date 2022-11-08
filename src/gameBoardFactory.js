import { shipFactory } from "./shipFactory"

const gameBoardFactory = () => {
  const grid = _createGrid();
  return {
    grid,
    placeShip(coordinatesArray) {
      let length = coordinatesArray.length;
      let newShip = shipFactory(length, 0, false);
      let gridCoordinates = grid.map(x => x.coordinate.toString())
      coordinatesArray.forEach(coordinate => {
        let index = gridCoordinates.indexOf(coordinate.toString());
        if (index !== -1) {
          grid[index].ship = newShip;
        }
      });
    },
    //Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    receiveAttack(coordinates) {
      let coordinatesString = coordinates.toString()
      let gridCoordinates = grid.map(x => x.coordinate.toString())
      let index = gridCoordinates.indexOf(coordinatesString);
      if (index !== -1) {
        grid[index].ship = true;
      }
    }
  }
}

const _createGrid = () => {
  let grid = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid.push(_coordinateFactory(i, j))
    }
  }
  return grid;
}

const _coordinateFactory = (i, j) => {
  return {
    coordinate: [i, j],
    ship: false,
    hit: false
  }
}

export {
  gameBoardFactory,
  _createGrid
}