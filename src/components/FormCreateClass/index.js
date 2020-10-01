import React,{ useState, useContext } from 'react';
import './style.css'

import FormContext from '../../context/Form/FormContext'
const FormCreateClass = ({ hiddenModal }) => {
    const [contentForm, setContentForm] = useState('')
    const { setStateForm } = useContext(FormContext)
    const closeModal = e =>{
        hiddenModal()
    }
    const sendData = e =>{
        e.preventDefault()   
        if(isEmpty(contentForm)){
            setStateForm(contentForm) 
            hiddenModal()
        }
    }
    const isEmpty = content => content.trim().length > 0


    return ( 
        <form action="" className="form" onSubmit= {sendData}>
            <h2 className="form__header">Create Class</h2>
            <div className="form__content">
            
                <input type="text" 
                    placeholder="Name" 
                    className="form-input" 
                    onChange = {e=> setContentForm(e.target.value)}/>
                <input type="submit" value="create" className="form-button" />
                <button className="form-button" onClick ={closeModal}>cancel</button>
            </div>
        </form>
    )
} 
export default FormCreateClass;