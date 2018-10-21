// dont forget to import the React into your new components
import React from 'react';
import './UserOutput.css';

// Created this UserOutput component that holds 2 paragraphs <p> 
// The usage of the props argument allows me to take attributes from another component and user them here
const useroutput = (props) => {
    return(
    <div class="UserOutPut">
        <p>I'm {props.username} and I love to code. I will do whatever I can to get better!!!</p>
        <p>Starting with this course is how I am attempting to get more practice.</p>
    </div>
    )
}

// export default because you only have one thing to export out of the file
export default useroutput;