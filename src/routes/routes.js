import React from 'react';
import { isAuthenticated } from '../services/auth/auth';
import Blank from '../views/blank';
import BooksPagination from '../views/BooksPagination';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
        {...Route} render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location}}} />
            )
        }
    />
);

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={["/","/dashboard"]} component={Blank}/>
            <PrivateRoute path="/BooksPagination" component={BooksPagination}/>
        </Switch>
    </Router>
);

export default Routes;