import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import ViewportGrid from "./components/ViewportGrid";


// const Heading = ({ title }: { title: string, className: string }) => <h2>{title}</h2>

// type BoxProps = {
//   children: React.ReactNode;
// }

// const Box = (props: BoxProps) => {
//   return <div
//   style={{
//     padding: "1rem",
//     fontWeight: "bold",
//     color: "red",
//   }}
//   >
//     {props.children}
//     </div>
// }




/**
 * App Component
 */
export function App() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [row, setRow] = useState<number>(1);
  const [column, setColumn] = useState<number>(1);
  const [rows, setRows] = useState([] as number[]);
  const [columns, setColumns] = useState([] as number[]);
  // const [inputfieldsToAdd, setInputfieldsToAdd] = useState(1);
  // const [committedFieldsToAdd, setCommittedFieldsToAdd] = useState(0);

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
  
  return <div className="App">
    <Sidebar row={row} setRow={setRow} column={column} setColumn={setColumn} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
    <ViewportGrid row={row} setRow={setRow} column={column} setColumn={setColumn} toggleSidebar={toggleSidebar} />
    {/* <Heading className="heading" title="Hello"/>
    <Box>
      Hi There
    </Box> */}
         <div>
        Row:
        <input
          type="number"
          value={row}
          onChange={(e) =>
            setRow(parseInt(e.currentTarget.value, 10))
          }
        />
      </div>

      <div>
        Column:
        <input
          type="number"
          value={column}
          onChange={(e) =>
            setColumn(parseInt(e.currentTarget.value, 10))
          }
          />
      </div>
      <button onClick={generateGrid}>Generate Grid</button>
      <>
      {rows.length !== 0 ? (
        <div className={`${toggleSidebar ? 'container-closed-seven-rows-eight-columns' : 'container-seven-rows-eight-columns'}`} >
            {rows.map((i) => {
              return (
                <>
                {/* <div
                  key={"div" + i}
                  style={{ color: i % 2 !== 0 ? "blue" : "black" }}
                >
                </div> */}
                  {columns.map((j) => {
                    return (
                      <div className="five-rows-five-columns-item" key={i + "div" + j}>
                        {i},{j}
                      </div>
                    );
                  })}
                </>
              );
            })}
        </div>
      ) : null}
      </>
      {/* <button
        onClick={() => {
          setCommittedFieldsToAdd(inputfieldsToAdd);
        }}
      >
        Add fields
      </button> */}
      {/* {fields} */}
      {/* <div className="container-closed-one-row-two-columns">
      {[...Array(row)].map(
        (value: undefined, index: number) => (
          <Field id={index + 1} key={index} />
        )
      )}
       {[...Array(column)].map(
        (value: undefined, index: number) => (
          <Field id={index + 1} key={index} />
        )
      )}
      </div> */}
  </div>;
}

// const Field = ({ id }: { id: number }) => (
//   <div id={`div${id}`} className="two-rows-two-columns-item">One Row x One Item {id}</div>
     
// );
