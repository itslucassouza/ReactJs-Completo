import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase';
import './new.css';


class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            imagem: null,
            url: '',
            descrição: '',
            alert: '',
        };

        this.cadastrar = this.cadastrar.bind(this); 
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        if(!firebase.getCurrent()){
            this.props.history.replace('./')
            return null;
        }
    }
    cadastrar = async(e) => {
        e.preventDefault();

        if(this.state.titulo !== '' && this.state.imagem !== '' && this.state.descrição !== ''){
           let posts = firebase.app.ref('post');
           let chave = posts.push().key;
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.imagem,
                descrição: this.state.descrição,
                autor: localStorage.nome 
            });

            this.props.history.push('/dashboard');
        } else {
            this.setState({alert: 'preencha todos os campos'});
        }
    }

    handleFile(e) {
        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === 'image/png' || image.type === 'image.jpeg'){
                console.log(image)
            }else{
                alert('envie uma imagem do tipo png ou jpg')
                this.setState({image: null})
                return null;

            }
        }

    }

    render() {
        return (
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <form onSubmit={this.cadastrar}>
                    <span> {this.state.alert} </span>
                    <label>titulo:</label>
                    <input type="text" placeholder="nome do post" value={this.state.titulo} autoFocus
                        onChange={(e) => this.setState({ titulo: e.target.value })} />

                    <label>url da imagem: </label>
                    <input type="file" 
                    onChange={this.randleFile} />

                    <label>Descrição: </label>
                    <textarea type="text" placeholder="Descrição" value={this.state.descrição}
                        onChange={(e) => this.setState({ descrição: e.target.value })} />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);