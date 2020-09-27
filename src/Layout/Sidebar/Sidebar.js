import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const handlerButton = (e)=> {
        console.log('click')
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