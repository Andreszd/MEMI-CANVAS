import React from 'react';
import './style.css'
import FormState from './context/Form/FormState'
import Home from './views/Home'
const  App = ()=> {
  
  return (
    <FormState>
      <Home />
    </FormState>
  );
}
export default App;
