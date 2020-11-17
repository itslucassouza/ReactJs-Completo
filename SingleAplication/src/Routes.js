import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'

const Routes = () => {
    return(
        <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;