import React from 'react';
import './Canvas.css'
const Canvas = () => {
    return (  
        <div className="container-canvas">
            <canvas 
                className="canvas"
                height="600px"
                width ="600px"
            />
        </div>
    )
}
 
export default Canvas;