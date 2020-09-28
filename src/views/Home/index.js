import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar'
import CreatePortal from '../../components/Modal/CreatePortal'
import Canvas from '../../components/Canvas'
import FormCreateClass from '../../components/FormCreateClass'
import useModal from '../../Hooks/useModal'
import './style.css'
const Home = () => {
    const [show, getContent, setContentModal, setShow ] = useModal(false)
    useEffect(()=>{
        if(show === true){
            setContentModal(< FormCreateClass setShow={setShow}/>)
        }
    },[show])
    return ( 
    <div className="container" >
        <Sidebar 
        setShow = {setShow}
        />
        <main className="main">
            <Canvas/>
        </main>
        <CreatePortal 
            content = {getContent()} 
            isOpened = {show}
        /> 
    </div>        
    )
}
 
export default Home;