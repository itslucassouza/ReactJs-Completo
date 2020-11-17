import React, { Component } from 'react';

class App extends Component {
//quando usar props? Estatica
//states: São mutaveis e podem modificar
//variavel construtora
    constructor(props) {
        super(props);
        this.state = {
            nome: 'matheus',
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }
//variavel responsavel por almentar os numeros
    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState({state})
    };
//variavel responsavel por diminuir os numeros
    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('Opa, chegou a zero!');
            return;
        }
        state.contador -= 1 ;
        this.setState({state});
    };

//render é oq o usuario vai ver
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}
export default App;
