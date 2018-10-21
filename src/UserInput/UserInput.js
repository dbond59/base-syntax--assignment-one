// dont forget to import the React into your new components
import React from 'react';


const userInputStyle = {
    border: '3px dotted black',
    textAlign: 'center',
    boxShadow: '3px 3px 4px darkgray',
    padding: '4px'
}

// Created this UserInput Component that holds an imput element
// const tells me that the var userinput will never change
// added two-way binding being able to listen to changes and output the name as the value for the input
// can't add a vaule prop without allowing yourself to react to changes so you need onChange before value
// I really dont need the onClick function but kept it anyways to show the onClick event useing the setState keyword
const userinput = (props) => {
    return ( 
    <input style={userInputStyle} type="text" onClick={props.newName} onChange={props.newInputtedName} value={props.currentName}/>
    )
};

// export default because you only have one thing to export out of the file
export default userinput;