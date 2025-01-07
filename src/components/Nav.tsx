import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { Select } from "./Select";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { PlayButton } from "./PlayButton";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";

export function Nav({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathfinding();
  const { startTile, endTile } = useTile();
  const { speed, setSpeed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }
    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      console.log("resetting grid");
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }
    const { visitedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });
    animatePath(visitedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsDisabled(false);
      setIsGraphVisualized(true);
      isVisualizationRunningRef.current = false;
    }, SLEEP_TIME * (visitedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
  };
  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-opacity-80 bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="flex items-center justify-center min-h-[4.5rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
          {/* Logo/Title */}
          <h1 className="lg:flex hidden w-[40%] text-3xl font-extrabold pl-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:via-blue-500 hover:to-green-400 transition-all duration-500 cursor-default">
            PathViz
          </h1>

          {/* Controls Container */}
          <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col gap-4 sm:gap-6 py-2 sm:py-0">
            <Select
              label="Maze"
              value={maze}
              options={MAZES}
              isDisabled={isDisabled}
              onChange={(e) => {
                handleGenerateMaze(e.target.value as MazeType);
              }}
            />
            <Select
              label="Graph"
              value={algorithm}
              isDisabled={isDisabled}
              options={PATHFINDING_ALGORITHMS}
              onChange={(e) => {
                setAlgorithm(e.target.value as AlgorithmType);
              }}
            />
            <Select
              label="Speed"
              value={speed}
              options={SPEEDS}
              isDisabled={isDisabled}
              onChange={(e) => {
                setSpeed(parseInt(e.target.value) as SpeedType);
              }}
            />
            <PlayButton
              isDisabled={isDisabled}
              isGraphVisualized={isGraphVisualized}
              handlerRunVisualizer={handlerRunVisualizer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
