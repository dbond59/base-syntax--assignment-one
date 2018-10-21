import React, { Component } from 'react';
import './App.css';
// make sure you import other components that you will use code from (use this format below)
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  // used the state keyword to use dynamic code within this component
  state = {
    username: "Deyshawn"
  }

  // created an event-handler method that will manipulate the state and connect to the button below and change the username that I assign
  changeNameHandler = (newClickTextBoxName) => {
    // console.log('double clicked named changed');
    // use this.setState method, it will merge what we define here with our existing state!
    this.setState({username: newClickTextBoxName})
  }

  newNameHandler = (event) => {
    this.setState({username: event.target.value}) 
  }

  // this render method will be what the page renders as soon that app is launched
  // below I took the imported components and added there contents to the render method so they are visible
  // also added a button with an onDoubleClick action that takes in the changeNameHandler method
  // for the userOutPut I added the username prop that then uses the state keyword to grab information
  render() {
    
    const btnStyle = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '2px dotted black',
      padding: '8px',
      margin: '5px 0 0 10px',
      cursor: 'pointer',
      boxShadow: '3px 3px 4px darkgray'
    }

    return(
      <div className="App">
      <UserInput
        newInputtedName={this.newNameHandler}
        newName={this.changeNameHandler.bind(this, "Jeremy")}
        currentName={this.state.username}/>
      <button 
      style={btnStyle}
      onDoubleClick={this.changeNameHandler.bind(this, "Luke")}>Double Click</button>
      <UserOutput 
        username={this.state.username}/> 
      <UserOutput 
        username={this.state.username}/>
      <UserOutput 
        username="Carrington"/>
      </div>
    );
  }
}

export default App;

// The instructions are:

// ~ Create TWO new components: UserInput and UserOutput 
// ~ UserInput should hold an input element, UserOutput two paragraphs
// ~ Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// ~ Pass a username (of your choice) to UserOutput via props and display it there
// ~ Add state to the App component (=> the username) and pass the username to the UserOutput component
// ~ Add a method to manipulate the state (=> an event-handler method)
// ~ Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// ~ Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// ~ Add two-way-binding to your input (in UserInput) to also display the starting username
// ~ Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
