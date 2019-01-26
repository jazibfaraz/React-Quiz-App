import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';


class App extends Component {
  constructor(){
     super();
     
  }

  


  render() {

    

    return (

      <div className="App">
        
        <div className="header">

          <div className="logo">
          <p>Quiz App</p>
          </div>
          
          <div className="header-menu">

          <Router>
            
              <div>
              <Link to="/">HOME</Link>
              <Link to="/Login">LOGIN</Link>
              <Link to="/Signup">SIGNUP</Link>
              </div>
            
          </Router>
          

          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
