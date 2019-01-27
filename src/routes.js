import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Dashboard from './screens/Dashboard/Dashboard';



const CustomHistory = createBrowserHistory();

const CustomRoutes = () => (

    <Router history={CustomHistory}>
        <div>
            {/* <Link to='/'>HOME</Link>
            <Link to='/Login'>LOGIN</Link> */}

            <Route exact path='/' component={App} />
            <Route exact path='/Login' component={Login} />
            <Route path='/Signup' component={Signup} />
            <Route path='/Dashboard' component={Dashboard} />

        </div>
    </Router>
)

export default CustomRoutes;