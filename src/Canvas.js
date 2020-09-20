import React, { useRef, useState, useEffect} from 'react';

const Canvas = () => {
    const [isDrawing, setIsDrawing] = useState(false)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    useEffect(() => {
        const canvas  = canvasRef.current 
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx

    }, [])
    const onMouseDown = ({ nativeEvent }) =>{
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }
    const onMouseUp = () =>{
        contextRef.current.closePath()        
        setIsDrawing(false)
    }
    const onMouseMove = ({ nativeEvent }) =>{
        if(!isDrawing) return
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }
    console.log('me renderize xd') 
    return (
        <>
            <canvas  className="canvas" 
                    ref = {canvasRef} 
                    onMouseDown = {onMouseDown}
                    onMouseMove = {onMouseMove}
                    onMouseUp = {onMouseUp}
                    />
            <button
                
            >Create class</button>
        </>
    )
}
 
export default Canvas;