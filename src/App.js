import React from "react";
import ReactDOM from 'react-dom'
import "./styles.css";
import UI from './Components/UI'

function App(props) {
  return(
    <div>
      <UI />
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))