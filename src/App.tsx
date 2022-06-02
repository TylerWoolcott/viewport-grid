import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import ViewportGrid from "./components/ViewportGrid";

//useRef removing div stops it from updating the size of viewport 
//useRef adding extra rows outside of viewport
//test sidebar button onClick
//test getGridSize function in useEffect 

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
    console.log('hello', gridRef)
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
  setRows((t) => [...rows]);
  setColumns((t) => [...columns]);
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
          style={{gridTemplateColumns: gridColumnStyle, gridTemplateRows: gridRowStyle}}
          className={`${toggleSidebar ? 'container-closed-seven-rows-eight-columns' : 'container-seven-rows-eight-columns'}`} >
            {rows.map((i) => {
              return (
                <>
                {/* <div
                  ref={gridRef}
                  key={"div" + i}
                >
                </div> */}
                  {columns.map((j) => {
                    return (
                      <div 
                        ref={gridRef}
                        className="five-rows-five-columns-item" key={i + "div" + j}
                      >
                        {/* {i},{j} */}
                        {width && <p>{width}</p>}
                        X
                        {height && <p>{height}</p>}
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

