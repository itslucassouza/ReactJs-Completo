import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        }

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this)
    }
    
    register(e) {
        e.preventDefault(); 

        this.onRegister();
    }

    onRegister = async() => {
        try{
            const {nome, email, password} =this.state

            await firebase.register(nome, email, password);
            this.props.history.replace('/dashboard'); 
        }
        catch(error){
            alert(error.message);
        }
    }
        render(){
            return(
            <div>
                <h1 className="register-h1">Novo usuario</h1>
                <form onSubmit={this.Register} id="register">
                    <label>Nome:</label><br/>
                    <input type="text" value={this.state.nome} autoFocus autoComplete="off" placeholder="Lucas"
                    onChange={(e) => this.setState({ nome: e.target.value})}/>

                    <label>Email:</label><br/>
                    <input type="email" value={this.state.email} autoFocus autoComplete="off" placeholder="teste@teste.com"
                    onChange={(e) => this.setState({ email: e.target.value})}/> 

                    <label>password:</label>
                    <input type="text" value={this.state.password} autoFocus autoComplete="off" placeholder="123123"
                    onChange={(e) => this.setState({ password: e.target.value})}/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );  
    }
}

export default withRouter(Register);