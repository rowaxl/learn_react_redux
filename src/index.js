// Import the React and ReactDoM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const submitButtonText = {message:'Submit'};
    const style = { backgroundColor: 'blue', color: 'white', border: '1px solid red', };
    return (
        <div>
            <label className="label" for="name">Name:</label>
            <input id="name" type="text" />
            <button style={style}>
                {submitButtonText.message}
            </button>
        </div>);
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

