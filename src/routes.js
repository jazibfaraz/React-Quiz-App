import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Dashboard from './screens/Dashboard/Dashboard';
import QuizPage from './screens/QuizPage/QuizPage.'



const CustomHistory = createBrowserHistory();

const CustomRoutes = () => (

    <Router history={CustomHistory}>
        <div>
            {/* <Link to='/'>HOME</Link>
            <Link to='/Login'>LOGIN</Link> */}

            <Route exact path='/' component={App} />
            <Route  path='/Login' component={Login} />
            <Route path='/Signup' component={Signup} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/QuizPage/:keyword' component={QuizPage} />

        </div>
    </Router>
)

export default CustomRoutes;