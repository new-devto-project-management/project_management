import React, { uesState, useState} from "react";
// import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/components/authers/dropdown.css';
import { Files } from "./Files";


function Dropdown () {
    const [click, setClick] = useState(false)

    const handelClick = () => setClick(!click)

    return (
        <>
            <ul onClick={handelClick} className={click ? 'dropdown-menu cliked' : 'dropdown-menu'}>
                {Files.map((item, index) => {
                    return(
                        <li key={index}>
                            <link className={item.name} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </link>
                        </li>
                    )
                })}

            </ul>
        </>
    );
        
    

}
export default Dropdown;