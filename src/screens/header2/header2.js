import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import  './header2.css'

class Header2 extends Component {


    render()
    {
        return(
            
            

                <div className="header">

                <div className="logo">
                <p>Quiz App</p>
                </div>

                <div className="header-menu">

                
                
                    <div>
                    {/* <Link to="/">HOME</Link>
                    <Link to="/Login">LOGIN</Link> */}
                    <Link to="/Login"><b>Logout</b></Link>
                    </div>
                
                


                </div>
                </div>
            
        )
    }
}

export default Header2;