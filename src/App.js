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

  signup()
  {
    this.props.history.push('/Signup')
  }


  render() {

    return (

      <div className="Apps">
      
      <Header1 />
      
        <div className='get-started-div'>
          
        <button type='button' onClick={this.signup.bind(this)}>Get Started</button>

        
        </div>
        <div className='title-div'>Welcome To The <br /> React Based  Quiz App</div> 
       
        
      </div>
    );
  }
}

export default App;
