//import react and reactdom
import React from 'react'
import ReactDOM from 'react-dom'


//create a react components
const App = () => {
    const buttonText = { text: "Click Me!" };
    const labelName = "Enter Name:"
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelName}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
            {/* <div>Current Time:</div>
            <div>{(new Date).toLocaleTimeString()}</div> */}
        </div>
    )
}

//Take the react components and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
) 