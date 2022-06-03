import React from "react";
import { Burger } from "../icons/Burger";

// pass toggleSidebar, setToggleSidebar, row, setRow, column, and setColumn, props to Sidebar component

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

    // require Row / Column values to be between 1-10

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
                <div className={`${toggleSidebar ? 'hamburger-style-closed' : 'hamburger-style-open'}`}>
                    <button className="sidebar-button" data-testid="btn-sidebar" onClick={handleToggleSidebar}>
                        <Burger />
                    </button>
                </div>
                <div className={`${toggleSidebar ? 'form-container-hidden' : 'form-container-visible'}`}>
                    <form className={`${toggleSidebar ? 'form-hidden' : 'form-visible'}`}>
                        <label role="row" className="row-label">Rows</label>
                            <input 
                                type="number" 
                                min="1"
                                max="10"
                                data-testid="row-input"
                                value={row}
                                onChange={handleRowChange}
                                name="rows" 
                            />
                        <label role="contentinfo" className="column-label">Columns</label>
                            <input 
                                type="number" 
                                min="1"
                                max="10"
                                data-testid="column-input"
                                value={column}
                                onChange={handleColumnChange}
                                name="columns" 
                            />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar;

