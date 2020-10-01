import React, { useRef, useState, useEffect} from 'react';

const Canvas = () => {
    const [isDrawing, setIsDrawing] = useState(false)
    const [positions, setPositions] = useState({})
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    useEffect(() => {
        const canvas  = canvasRef.current 
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx
        setPositions({x: 20, y:20})
        //no llegue uwu
        ctx.fillRect(20, 20, 50, 50)

    }, [])
    const onMouseDown = ({ nativeEvent }) =>{
        const { offsetX, offsetY } = nativeEvent
        setIsDrawing(true)
    }
    const onMouseUp = () =>{
        contextRef.current.closePath()        
        setIsDrawing(false)
    }
    const onMouseMove = ({ nativeEvent }) =>{
        if(!isDrawing) return
        const { offsetX, offsetY } = nativeEvent
        setPositions({x: offsetX, y: offsetY})
        if(positions){
            const { x, y } = positions
            contextRef.current.clearRect(x, y, 50, 50)
        }
        contextRef.current.fillRect(offsetX, offsetY, 50, 50)
    }
    return (
        <>
            <canvas  className="canvas" 
                    ref = {canvasRef} 
                    onMouseDown = {onMouseDown}
                    onMouseMove = {onMouseMove}
                    onMouseUp = {onMouseUp}
                    width="600"
                    heigth ="300" 
                    />
            <button
                
            >Create class</button>
        </>
    )
}
export default Canvas;