import React, { Component } from 'react';


class Login extends Component {
  
  


  render() {


    return (

      <div className="App">
        <div>
          <input type='email' placeholder='Email' required /><br />
          <input type='password' placeholder='Password' required /><br />
          <button type='button'>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
