import React, { ReactElement, ReactNode } from "react";
import "./grid.module.css";

interface GridProps {
  rows: number;
  columns: number;
  children: ReactElement[];
}

interface CellProps {
  row: number;
  column: number;
  children: ReactNode;
}

const Grid = ({ rows, columns, children }: GridProps) => {
  <div
    className="grid"
    style={{ "--rows": rows, "--columns": columns } as React.CSSProperties}
  >
    <div className="grid-guides">
      {Array.from({ length: rows * columns }, (_, index) => {
        // Calculate the x and y position of the cell
        const x = (index % columns) + 1;
        const y = Math.floor(index / columns) + 1;
        return (
          <div
            className="grid-guide"
            style={{ "--x": x, "--y": y } as React.CSSProperties}
          />
        );
      })}
    </div>
    {/* Cells will render here */}
    {children}
  </div>;
};

function Cell({ row, column, children }: CellProps) {
  return (
    <div className="grid-cell" style={{ gridRow: row, gridColumn: column }}>
      {children}
    </div>
  );
}

Grid.Cell = Cell;
export default Grid;
