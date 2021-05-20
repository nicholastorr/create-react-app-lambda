import React, { Component } from "react"
import headerImage from "./lambda/image.jpg";
import "./App.css"


 
  


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="header">
        <ul>
            <li>Home</li>
            <li>Web</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>



        <div className="header-text">
        <h2>Nicholas Esquilo Torres</h2>
        <h4>Full Stack Web Developer</h4>
        </div>

        <img src={headerImage} alt="header"/>

        <div className="header-intro">
        <p>Hello! Thanks for checking out my portfolio.</p>
        <p>I am web developer based out of Tampa, Florida and have a passion for computers</p>
        </div>



        </div>

       
      </div>
    )
  }
}

export default App
