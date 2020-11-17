import React , { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                  <Sobre 
                  nome={this.props.nome} 
                  cargo={this.props.cargo} 
                  idade={this.props.idade} />
                  <Social />
            </div>
        )
    };
}

class Sobre extends Component{
    Render(){
        return(
            <div>
                <h2> Olá sou o {this.props.nome} </h2>
                <h3> {this.props.cargo} </h3>
                <h3>{this.props.idade} </h3>
            </div>
        )
    };
}
//misturando as coisas 
const Social = (props) => {
    return(
        <div>
        <a> Facebook </a>
        <a> linkedin </a>
        </div>
    );
}
function App() {
    return (
        <div>
            <h3>Conheça Nossa Equipe:</h3>
            <Equipe nome="Lucas" cargo="Front-end" idade="23" facebook="google.com.br" />
        </div>
    );
}

export default App;