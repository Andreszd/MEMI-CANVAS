import React,{ useState, useEffect } from 'react';
import './style.css'
import Sidebar from './Layout/Sidebar'
import Main from './Layout/Main'
import CreatePortal from './util/CreatePortal'
import Modal from './Layout/Modal'
import FormCreateClass from './components/FormCreateClass'
const  App = ()=> {
  const [isOpened, setOpened] = useState(false)
  const [contentPopup, setContent] = useState(null)
  useEffect(()=>{
    if(isOpened){
      setContent(<Modal content={< FormCreateClass setOpened={setOpened}/>}/>)
    }
  },[isOpened])
  return (
  <div className="container" >
    <Sidebar 
      isOpened = {isOpened}
      setOpened = {setOpened}
    />
    <Main />
     <CreatePortal 
        content = {contentPopup} 
        isOpened = {isOpened}
     /> 
  </div>
  );
}
export default App;
