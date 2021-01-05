import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Painel from './pages/Painel';
import { autenticado } from './auth';

const PrivateRoute = ({ component: Compoenent, ...rest}) => {
    <Route {...rest} render={props => (
        autenticado() ? (
           <Component {...props} /> 
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location }}} />
        )
    )} />
};

class Routes extends Component{
    render(){
        return(
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/painel" component={Painel} />
       </Switch>
       </BrowserRouter>
        )
    }
}

export default Routes;