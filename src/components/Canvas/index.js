import React from 'react'

import './style.css'

const Canvas = () => {
    return (
        <div className="canvas">
            <div className="canvas__container">
                <canvas className="canvas" width="1200px" height="720px" />
            </div>
        </div>
    )
}

export default Canvas
