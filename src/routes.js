import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Dashboard from './screens/Dashboard/Dashboard';

const CustomRoutes = () => (

    <Router>
        <div>
            <Link to='/'>HOME</Link>
            <Link to='/Login'>LOGIN</Link>

            <Route exact path='/' component={App} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Dashboard' component={Dashboard} />
        </div>
    </Router>
)

export default CustomRoutes;