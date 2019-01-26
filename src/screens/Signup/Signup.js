import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase'
import swal from 'sweetalert';
import App from '../../App';

const db = firebase.database();
const auth = firebase.auth();

class Signup extends Component {
  
  constructor()
  {
    super();

    this.state = {
      isLogin: false,
      isSignup: true,
      fname: null,
      lname: null,
      email: null,
      pass: null,
    }

    this.Signup = this.Signup.bind(this);
  }


   Signup() {
     const { fname, lname, email, pass } = this.state;

     var userInfo = {
       firstName: fname,
       lastName: lname,
       email: email,
       password: pass,
     }

    auth.createUserWithEmailAndPassword(email, pass)
      .then((success) =>{
        
        // it is getiing the user uid which created at the time of signup in firebase
        let currentUserUid = auth.currentUser.uid;

        // it is pushing the user info in the firebase db which we got when user signed up
        db.ref('UserInfo/'+currentUserUid+'/').push(userInfo);
        
        swal({

          title: 'Congratulations!',
          text: 'you have successfully created the account.',
          icon: 'success'
        })
        
        
        
      })
      .then( success =>{
        this.props.history.push('/Login')
      })
      .catch((error) => {
        swal({
          title: 'Ooops!',
          text: 'email already existed',
          icon: 'error',
        });
      })
    
  }

  render() {

    return (

      <div className="App">
      <App /><br />
        <div>
          <input type='text' placeholder='First Name' onChange={e => this.setState({fName: e.target.value})} required /><br />
          <input type='text' placeholder='Last Name' onChange={e => this.setState({lName: e.target.value})} required /><br />
          <input type='email' placeholder='Email' onChange={e => this.setState({email: e.target.value})} required /><br />
          <input type='password' placeholder='Password' onChange={e => this.setState({pass: e.target.value})} required /><br />
          <button type='button' onClick={this.Signup}>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Signup;
