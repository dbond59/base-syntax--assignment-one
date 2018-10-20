// dont forget to import the React into your new components
import React from 'react';

// Created this UserInput Component that holds an imput element
// const tells me that the var userinput will never change
// added two-way binding being able to listen to changes and output the name as the value for the input
// can't add a vaule prop without allowing yourself to react to changes so you need onChange before value
const userinput = (props) => {
    return ( 
    <input type="text" onClick={props.newName} onChange={props.newInputtedName} value={props.currentName}/>
    )
};

// export default because you only have one thing to export out of the file
export default userinput;