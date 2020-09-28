import React,{ useState } from 'react';
import './style.css'
const FormCreateClass = ({ setShow }) => {
    const [contentForm, setContentForm] = useState('')

    const closeModal = e =>{
        setShow(false)
    }
    const sendData = e =>{
        e.preventDefault()   
        if(isEmpty(contentForm)){
            /* send into to state */   
        }
    }
    const isEmpty = content => content.trim().length > 0


    return ( 
        <form action="" className="form">
            <h2 className="form__header">Create Class</h2>
            <div className="form__content">
            
                <input type="text" 
                    placeholder="Name" 
                    className="form-input" 
                    onChange = {e=> setContentForm(e.target.value)}/>
                <input type="submit" value="create" className="form-button" onClick={sendData}/>
                <button className="form-button" onClick ={closeModal}>cancel</button>
            </div>
        </form>
    )
} 
export default FormCreateClass;