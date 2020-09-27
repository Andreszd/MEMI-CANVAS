import React from 'react';
import './style.css'
import Sidebar from './Layout/Sidebar'
import Main from './Layout/Main'
const  App = ()=> {
  return (
  <div className="container" >
    <Sidebar />
    <Main />
  </div>
  );
}
export default App;
