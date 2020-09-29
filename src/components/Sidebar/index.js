import { faShower } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import './style.css'

const Sidebar = ({ setShow }) => {
    const handlerButton = () => {
        setShow(true)
    }

    return (
        <aside className="sidebar">
            <h2 className="sidebar__header"> Settings </h2>
            <div className="sidebar__content">
                <button className="sidebar__button" onClick={handlerButton}>
                    new class
                </button>
                <button className="sidebar__button">button 2</button>
                <button className="sidebar__button">button 3</button>
            </div>
        </aside>
    )
}

export default Sidebar
