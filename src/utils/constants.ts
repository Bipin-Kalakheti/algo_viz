import { MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isVisited: false,
  parent: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isVisited: false,
  parent: null,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200 ";
export const VISITED_TILE_STYLE = TILE_STYLE + "bg-blue-500";
export const WALL_TILE_STYLE = TILE_STYLE + "bg-gray-500";
export const PATH_TILE_STYLE = TILE_STYLE + "bg-yellow-500";
export const START_TILE_STYLE = TILE_STYLE + "bg-green-400";
export const END_TILE_STYLE = TILE_STYLE + "bg-red-500";


export const MAZES: MazeSelectType[] = [
  {name: "No Maze", value: "NONE"},
  {name: "Binary Tree", value: "BINARY_TREE"},
  {name: "Recursive Division", value: "RECURSIVE_DIVISION"},
]


export const SPEEDS: SpeedSelectType[] = [
  {name: "Slow", value: 2},
  {name: "Medium", value: 1},
  {name: "Fast", value: 0.5},
]


export const SLEEP_TIME = 8;