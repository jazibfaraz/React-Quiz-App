import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import  './header1.css'

class Header1 extends Component {
    constructor()
    {
        super();

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.home = this.home.bind(this);
    }

    login()
    {   
            this.props.history.push('/Login');
        
    }

    signup()
    {
        this.props.history.push('/Signup');

    }

    
    home()
    {
        this.props.history.push('/');

    }

    render()
    {
        return(
            
            

                <div className="header">

                <div className="logo">
                <p>Quiz App</p>
                </div>

                <div className="header-menu">

                <Router>
                
                    <div>
                    <Link to="/" onClick={this.home}>HOME</Link>
                    <Link to="/Login" onClick={this.login}>LOGIN</Link>
                    <Link to="/Signup"  onClick={this.signup}>SIGNUP</Link>
                    </div>
                
                </Router>


                </div>
                </div>
            
        )
    }
}

export default Header1;