// import React, { useState } from "react";
import { Burger } from "../icons/Burger";

// interface BurgerProps extends React.ComponentProps<"button"> {
//     onClick: () => void;
//   }

interface toggleProps {
    toggleSidebar: boolean;
    setToggleSidebar: (value: boolean) => void;
}

interface rowsProps {
    row: number;
    setRow: (value: number) => void;
}

interface columnProps {
    column: number;
    setColumn: (value: number) => void;
}

const Sidebar = (props: (toggleProps & rowsProps & columnProps)) => {
    // const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
    const { toggleSidebar, setToggleSidebar, row, setRow, column, setColumn } = props;

    const handleToggleSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    }

    return (
        <>
            <div className={`${toggleSidebar ? 'sidebar-closed' : 'sidebar-open'}`}>
                <button className="sidebar-button" onClick={handleToggleSidebar}>
                    <Burger />
                </button>
                <form className="form">
                    <label className="row-label">
                        Rows
                        <input 
                            type="number" 
                            value={row}
                            onChange={(e) => setRow(parseInt(e.target.value))}
                            name="rows" 
                        />
                    </label>
                    <label className="column-label">
                        Columns
                        <input 
                            type="number" 
                            value={column}
                            onChange={(e) => setColumn(parseInt(e.target.value))}
                            name="columns" 
                        />
                    </label>
                </form>
                {/* {[...Array(rows)].map(
                    (value: undefined, index: number) => (
                        <Row id={index + 1} key={index} />
                    )
                )} */}
            </div>
        </>
    )
}

// const Row = (props: { id: number } ) => {
//     const { id } = props;
//     return (
//         <div>
//             <div id={`div${id}`}></div>
//         </div>
//     )
// }

export default Sidebar;