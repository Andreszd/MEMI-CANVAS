import React, { useContext, useEffect, useRef } from 'react';
import FormContext from '../../context/Form/FormContext'

import './style.css'
const Canvas = () => {
    const { stateForm } = useContext(FormContext)
    const canvasRef = useRef(null)
    useEffect(()=>{
        if(stateForm){
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            ctx.fillRect(20, 20, 60, 60)
            ctx.fillText(`${ stateForm }`, 20, 20)
        }
        console.log(canvasRef)
    },[stateForm])

    return (  
        <div className="container-canvas">
            <canvas 
                ref = {canvasRef}
                className="canvas"
                height="600px"
                width ="600px"
            />
        </div>
    )
}
 
export default Canvas;