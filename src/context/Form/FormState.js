import React,{ useState } from 'react';
import FormContext from './FormContext'
const StateForm = ( props ) => {
    const [stateForm, setStateForm] = useState(null)
    return (  
        <FormContext.Provider
            value={{
                stateForm,
                setStateForm
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
}
 
export default StateForm;