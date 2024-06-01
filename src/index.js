import React from 'react' // Import React library
import ReactDOM from 'react-dom' // Import ReactDOM for rendering
import './index.css' // Import the CSS file for this component
import App from './App' // Import the main App component

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Select the root element in index.html
)
