import React from 'react';
import './FormCreateClass.css'
const FormCreateClass = ({ setOpened }) => {
    const closeModal = e =>{
        setOpened(false)
    }
    return ( 
        <form action="" className="form">
            <h2 className="form__header">Create Class</h2>
            <div className="form__content">
                
                <input type="text" placeholder="Name" className="form-input"/>
                <input type="submit" value="create" className="form-button"/>
                <button className="form-button" onClick ={closeModal}>cancel</button>
            </div>
        </form>
    )
} 
export default FormCreateClass;