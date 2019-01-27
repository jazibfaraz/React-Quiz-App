import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase';
import swal from 'sweetalert';
import Header1 from '../header1/header1'

const auth = firebase.auth();

class Login extends Component {
  constructor(){
    super();

    this.state = {

      email: null,
      pass: null,

    }
    this.loginAuth = this.loginAuth.bind(this);
  }
  
  loginAuth()
  {
    const { email, pass } = this.state;
    auth.signInWithEmailAndPassword(email, pass)
    .then((success) => {
      this.props.history.push('/Dashboard');
    })
    .catch((error) => {
      swal({
        title: 'Ooops!',
        text: 'wrong email or password.',
        icon: 'error',
      });
    })
  }

  render() {


    return (

      <div className="App">

      <Header1 /><br />

        <div>
          <input type='email' placeholder='Email' onChange={e => this.setState({email: e.target.value})} required /><br />
          <input type='password' placeholder='Password' onChange={e => this.setState({pass: e.target.value})} required /><br />
          <button type='button' onClick={this.loginAuth}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
