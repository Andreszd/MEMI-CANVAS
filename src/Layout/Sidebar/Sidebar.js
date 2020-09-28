import { faShower } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Sidebar.css'
const Sidebar = ({ setOpened, isOpened }) => {
    const handlerButton = (e)=> {
        isOpened ? setOpened(false) : setOpened(true)


    }
    return ( 
        <div className="sidebar">
            <h2 className="sidebar__header"> Settings </h2>
            <div className="sidebar__content">
                <button className="button" onClick={handlerButton}>new class</button>
                <button className="button">button 2</button>
                <button className="button">button 3</button>

            </div>
        </div>
    )
}
 
export default Sidebar;