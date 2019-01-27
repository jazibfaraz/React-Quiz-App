import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Header1 from './screens/header1/header1';


class App extends Component {
  constructor(){
     super();
     
     this.state= {
       isLogin: false,
       isSignup: false,
       isDashboard: false,
       isApp: true,
     }
  }



  render() {

    return (

      <div className="Apps">
      
      <Header1 />
      
        
         Home
       
        
      </div>
    );
  }
}

export default App;
