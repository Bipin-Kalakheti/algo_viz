import { getUnvisitedNeighbors } from "../../../utils/getUnvisitedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInQueue } from "../../../utils/isInQueue";
import { GridType, TileType } from "../../../utils/types";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const visitedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isVisited = true;
  const unVisited = [base];

  while (unVisited.length) {
    const tile = unVisited.shift()!;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isVisited = true;
    visitedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors = getUnvisitedNeighbors(grid, tile);
    for (let i = 0; i < neighbors.length; i++) {
      if (!isInQueue(neighbors[i], unVisited)) {
        const neighbor = neighbors[i];
        neighbor.distance = tile.distance + 1;
        neighbor.parent = tile;
        unVisited.push(neighbor);
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];
  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }
  return { visitedTiles, path };
};
