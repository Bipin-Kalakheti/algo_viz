export type AlgorithmType =
  | "dijkstra"
  | "aStar"
  | "greedyBestFirst"
  | "breadthFirst"
  | "depthFirst";

export type MazeType =
  | "random"
  | "recursiveDivision"
  | "verticalDivision"
  | "horizontalDivision"
  | "binaryTree"
  | "prim"
  | "kruskal";

export type TileType = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isVisited: boolean;
  isPath: boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];
