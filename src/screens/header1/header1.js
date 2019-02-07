import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './header1.css'

class Header1 extends Component {

    render()
    {
        return(
            
            

                <div className="header">

                <div className="logo">
                <p>Quiz App</p>
                </div>

                <div className="header-menu">

                
                
                    <div>
                    <Link to="/" >HOME</Link>
                    <Link to="/Login">LOGIN</Link>
                    <Link to="/Signup">SIGNUP</Link>
                    </div>
                
                


                </div>
                </div>
            
        )
    }
}

export default Header1;