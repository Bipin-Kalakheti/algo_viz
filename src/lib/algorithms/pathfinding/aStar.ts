import { getUnvisitedNeighbors } from "../../../utils/getUnvisitedNeighbors";
import { dropFromQueue } from "../../../utils/helpers";
import { initfunctionCost, initHeuristicCost } from "../../../utils/heuristics";
import { GridType, TileType } from "../../../utils/types";

export const aStar = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const visitedTiles = [];
  const heuristicCost = initHeuristicCost(grid, endTile);
  const functionCost = initfunctionCost();
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isVisited = true;
  functionCost[base.row][base.col] =
    heuristicCost[base.row][base.col] + base.distance;
  base.isVisited = true;
  const unvisitedTiles = [base]; //priority queue initialization
  while (unvisitedTiles.length > 0) {
    unvisitedTiles.sort((a, b) => {
      if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
        return b.distance - a.distance;
      }
      return functionCost[a.row][a.col] - functionCost[b.row][b.col];
    });

    const currentTile = unvisitedTiles.shift();
    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance === Infinity) break;
      currentTile.isVisited = true;
      visitedTiles.push(currentTile);
      if (currentTile.isEnd) break; // Break if the tile is the end tile
      const neighbors = getUnvisitedNeighbors(grid, currentTile);
      for (let i = 0; i < neighbors.length; i += 1) {
        const distanceToNeighbor = currentTile.distance + 1;
        if (neighbors[i].distance > distanceToNeighbor) {
          dropFromQueue(neighbors[i], unvisitedTiles);
          functionCost[neighbors[i].row][neighbors[i].col] =
            heuristicCost[neighbors[i].row][neighbors[i].col] +
            neighbors[i].distance;
          neighbors[i].distance = distanceToNeighbor;
          neighbors[i].parent = currentTile;
          unvisitedTiles.push(neighbors[i]);
        }
      }
    }
  }
  const path = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }
  return { visitedTiles, path };
};
