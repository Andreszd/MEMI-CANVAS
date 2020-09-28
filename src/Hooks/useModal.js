import React, { useState } from 'react';
import Modal from '../components/Modal'
const useModal = (state) => {
    const [modal, setModal] = useState({
        content:null,
        show:state
    })
    const { content, show } = modal
    const setContentModal = (content)=> {
        setModal({
            ...modal,
            content: <Modal content={content}/>
        })       
    }
    const setShow = (view = false)=>{
        setModal({
            ...modal,
            show: view
        })
    }
    const getContent = () => modal.content
    
    return [
        show,
        getContent,
        setContentModal,
        setShow
    ]
}
 
export default useModal;