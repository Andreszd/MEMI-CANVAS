import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar'
import Canvas from '../../components/Canvas'
import FormCreateClass from '../../components/FormCreateClass'
import useModal from '../../Hooks/useModal'
import './style.css'
const Home = () => {
    const [showModal, hiddenModal, RenderModal ] = useModal(false)
    
    return ( 
    <div className="container" >
        <Sidebar showModal = {showModal}/>
        <main className="main">
            <Canvas/>
        </main>
        <RenderModal> 
            < FormCreateClass hiddenModal={hiddenModal}/>
        </RenderModal>
    </div>        
    )
}
 
export default Home;