// import React, { useState } from "react";
import { Burger } from "../icons/Burger";

interface toggleProps {
    toggleSidebar?: boolean;
    setToggleSidebar?: (value: boolean) => void;
}

interface rowsProps {
    row?: number;
    setRow?: (value: number) => void;
}

interface columnProps {
    column?: number;
    setColumn?: (value: number) => void;
}

export const Sidebar = (props: (toggleProps & rowsProps & columnProps)) => {
    const { toggleSidebar, setToggleSidebar, row, setRow, column, setColumn } = props;

    const handleToggleSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    }

    const handleRowChange = event => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    
        setRow(value)
      };

      const handleColumnChange = event => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    
        setColumn(value)
      };

    return (
        <>
            <div className={`${toggleSidebar ? 'sidebar-closed' : 'sidebar-open'}`}>
                <button className="sidebar-button" data-testid="btn-sidebar" onClick={handleToggleSidebar}>
                    <Burger />
                </button>
                <form className="form">
                    <label role="row" className="row-label">
                        Rows
                        <input 
                            type="number" 
                            min="1"
                            max="10"
                            value={row}
                            onChange={handleRowChange}
                            name="rows" 
                        />
                    </label>
                    <label role="contentinfo" className="column-label">
                        Columns
                        <input 
                            type="number" 
                            min="1"
                            max="10"
                            value={column}
                            onChange={handleColumnChange}
                            name="columns" 
                        />
                    </label>
                </form>
            </div>
        </>
    )
}

export default Sidebar;

