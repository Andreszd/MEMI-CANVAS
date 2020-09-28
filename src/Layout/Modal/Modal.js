import React from 'react';
import { CSSTransition } from 'react-transition-group'
import './Modal.css'
const Modal = ({ content }) => {
    return ( 
        <div className="container-modal">
            <CSSTransition
                appear
                in
                classNames="modal-transition"
                timeout={300}
            >
                <div className="modal">
                    {content}
                </div>
            </CSSTransition>
        </div>        
    )
}
 
export default Modal;