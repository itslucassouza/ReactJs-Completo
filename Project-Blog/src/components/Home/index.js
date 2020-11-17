import React, { Component } from 'react';
import firebase from '../../firebase';
import './home.css';

class Home extends Component{

    state = {
        posts: '[]'
    };

    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot) => {
            let state = this.state;
            state.post = [];

            snapshot.forEach((childItem)=> {
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    imagem: childItem.val().imagem,
                    descrição: childItem.val().descrição,
                    autor: childItem.val().autor
                })
            });

            state.posts.reverse();
            this.setState(state);
        })
    }

    render(){
        return(
            <section id="posts">
                {this.state.posts.map((posts)=> {
                    return(
                    <article key={posts.key}>
                        <header>
                            <div className="title">
                                <strong> {posts.titulo} </strong>
                                <span> autor {posts.autor}</span>
                            </div>
                        </header>
                        <img src={posts.image} alt="Capa do post" />

                        <footer>
                            <p>{posts.descrição}</p>
                        </footer>
                    </article>
                    );
                })}

            </section>
        );
    }
}

export default Home;