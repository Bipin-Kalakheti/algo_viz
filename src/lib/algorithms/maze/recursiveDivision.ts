import { GridType, SpeedType, TileType } from "../../../utils/types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";

export default async function recursiveDivision({
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
  row,
  col,
  height,
  width,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
  row: number;
  col: number;
  height: number;
  width: number;
}) {
  if (height <= 1 || width <= 1) {
    return;
  }
  if (height > width) {
    await horizontalDivision({
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
      row,
      col,
      height,
      width,
    });
  } else {
    await verticalDivision({
        grid,
        startTile,
        endTile,
        setIsDisabled,
        speed,
        row,
        col,
        height,
        width,
    })
  }
}

