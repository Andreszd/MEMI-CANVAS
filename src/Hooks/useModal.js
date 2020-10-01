import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Modal from '../components/Modal'
const useModal = (state = false) => {
    
    const [isVisible, setIsVisible] = useState(state)
    
    const hiddenModal = () => setIsVisible(false)
    const showModal = () => setIsVisible(true)
    const RenderModal = ({ children })=> {
        return(
            isVisible ? 
            ReactDOM.createPortal(
                <Modal 
                    content={children}
                />
            ,document.querySelector('#PopUp'))
            :null
        )    
    }
    
    return [
        showModal,
        hiddenModal,
        RenderModal
    ]
}

 
export default useModal;