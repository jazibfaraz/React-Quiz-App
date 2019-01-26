import React, { Component } from 'react';

class Signup extends Component {
  
  


  render() {

    return (

      <div className="App">
        <div>
          <input type='text' placeholder='First Name' required /><br />
          <input type='text' placeholder='Last Name' required /><br />
          <input type='email' placeholder='Email' required /><br />
          <input type='password' placeholder='Password' required /><br />
          <button type='button'>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Signup;
