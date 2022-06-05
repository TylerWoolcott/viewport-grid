import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

// passes toggleSidebar, row, column props to Viewport Grid component

interface toggleProps {
    toggleSidebar?: boolean;
}

interface rowsProps {
    row?: number;
    setRow?: (value: number) => void;
}

interface columnProps {
    column?: number;
    setColumn?: (value: number) => void;
}

export const ViewportGrid = (props: (toggleProps & rowsProps & columnProps)) => {
    const { toggleSidebar, row, column } = props;

    const [rows, setRows] = useState([] as number[]);
    const [columns, setColumns] = useState([] as number[]);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const gridRef = useRef<HTMLDivElement>(null);

      // dynamically track the size of the grid with useRef and useLayoutEffect
  
    useLayoutEffect(() => {
      getGridSize();
    })
  
    const getGridSize = () => {
      if (gridRef.current) {
      const newWidth = gridRef.current.clientWidth;
      setWidth(newWidth);
  
      const newHeight = gridRef.current.clientHeight;
      setHeight(newHeight);
      }
    };
  
    useLayoutEffect(() => {
      window.addEventListener("resize", getGridSize);
      return () => {
        window.removeEventListener("resize", getGridSize);
      }
  }, [])

    // dynamically create rows and columns (child divs) with useState and useEffect
  
  function generateGrid () {
    rows.length = 0;
    columns.length = 0;
    for (let i = 0; i < row; i++) {
      rows.push(i);
    }
    for (let j = 0; j < column; j++) {
      columns.push(j);
    }
    setRows((g) => [...rows]);
    setColumns((g) => [...columns]);
  }
  
    useEffect(() => {
      generateGrid();
    }, [row, column]);

    // dynamically add CSS Grid to the rows (eg. grid-template-rows: repeat(2, 1fr);) and columns (eg. grid-template-columns: repeat(2, 1fr);)  
  
    const gridColumnStyle =  columns.reduce((prevCol, currentCol) => prevCol + '1fr ', '');
    const gridRowStyle =  rows.reduce((prevRow, currentRow) => prevRow + '1fr ', '');

    return (
        <>
        {rows.length !== 0 ? (
          <div 
            ref={gridRef}
            style={{gridTemplateColumns: gridColumnStyle, gridTemplateRows: gridRowStyle}}
            className={`${toggleSidebar ? 'container-full' : 'container-collapsed'}`} >
              {rows.map((i) => {
                return (
                  <>
                    {columns.map((j) => {
                      return (
                        <div 
                          data-testid="grid"
                          className="viewport-items" key={i + "div" + j}
                        >
                          {width && <span>{Math.round(width / columns.length)}</span>}
                          X
                          {height && <span>{Math.round(height / rows.length)}</span>}
                        </div>
                      );
                    })}
                  </>
                );
              })}
          </div>
        ) : null}
        </>
    )
}

export default ViewportGrid;