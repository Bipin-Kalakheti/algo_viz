import { getUnvisitedNeighbors } from "../../../utils/getUnvisitedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dijkstra = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType

) => {
    const visitedTiles = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isVisited = true;
    const unvisitedTiles = [base]; //queue initialization
    while (unvisitedTiles.length > 0) {
        unvisitedTiles.sort((a, b) => a.distance - b.distance);
        const currentTile = unvisitedTiles.shift();
        if (currentTile) {
            if (currentTile.isWall) continue;
            if (currentTile.distance === Infinity) break;
            currentTile.isVisited = true;
            visitedTiles.push(currentTile);
            if (isEqual(currentTile, endTile)) break; // Break if the tile is the end tile
            const neighbors = getUnvisitedNeighbors(grid, currentTile);
            for (let i = 0; i < neighbors.length; i += 1) {
                if (neighbors[i].distance > currentTile.distance + 1) {
                    dropFromQueue(neighbors[i], unvisitedTiles);
                    neighbors[i].distance = currentTile.distance + 1;
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
}