import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import ViewportGrid from "./components/ViewportGrid";

/**
 * App Component
 */
export function App() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [row, setRow] = useState<number>(1);
  const [column, setColumn] = useState<number>(1);
  const [rows, setRows] = useState([] as number[]);
  const [columns, setColumns] = useState([] as number[]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

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

  const gridColumnStyle =  columns.reduce((prevCol, currentCol) => prevCol + '1fr ', '');
  const gridRowStyle =  rows.reduce((prevRow, currentRow) => prevRow + '1fr ', '');
  
  return <div className="App">
    <Sidebar row={row} setRow={setRow} column={column} setColumn={setColumn} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
    {/* <ViewportGrid row={row} setRow={setRow} column={column} setColumn={setColumn} toggleSidebar={toggleSidebar} /> */}

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
  </div>;
}

