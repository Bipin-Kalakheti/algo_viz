import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { AlgorithmType, GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "dijkstra":
      console.log("Dijkstra");
      break;
    case "aStar":
      console.log("A*");
      break;
    case "greedyBestFirst":
      console.log("Greedy Best First");
      break;
    case "breadthFirst":
      return bfs(grid, startTile, endTile);
    case "depthFirst":
      return dfs(grid, startTile, endTile);
    default:
      break;
  }
};
