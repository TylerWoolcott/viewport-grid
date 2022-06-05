import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewportGrid from "./components/ViewportGrid/ViewportGrid";

export function App() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [row, setRow] = useState<number>(1);
  const [column, setColumn] = useState<number>(1);
  
  return <div className="App">
    {/* Sidebar component passing props down */}
    <Sidebar row={row} setRow={setRow} column={column} setColumn={setColumn} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
    {/* Viewport component passing props down*/}
    <ViewportGrid row={row} setRow={setRow} column={column} setColumn={setColumn} toggleSidebar={toggleSidebar} />
  </div>;
}

