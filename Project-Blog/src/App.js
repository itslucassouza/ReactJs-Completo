import React, { Component } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import firebase from './firebase';

import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Register from './components/Register';
import New from './components/New';
import './global.css';


class App extends Component{
  state ={
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      //devolve o usuario
      this.setState({ firebaseInitialized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/dashboard/new" component={New} />
      </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando..</h1>
    );
  }
}

export default App;