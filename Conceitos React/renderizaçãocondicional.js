import React, { Component } from 'react';
//renderização condicional 
//quando quer renderizar uma coisa ou outra

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }
    sair() {
        this.setState({ status: false })
    }
    entrar() {
        this.setState({ status: true })
    }

    render() {
        return (
            //Comparação com operador ternario (bolean) 
            <div>
                {this.state.status ?
                    <div>
                        <h2>Bem Vindo</h2>
                        <button onClick={this.sair}>sair</button>
                    </div>
                    :
                    <div>
                        <h2>Olá visitante, Faça o login</h2>
                        <button onClick={this.entrar}> Fazer Login</button>
                    </div>}
            </div>
        )
    }
}

export default App;