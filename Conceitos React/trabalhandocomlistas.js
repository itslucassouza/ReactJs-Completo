import React, { Component } from 'react';
import Feed from './components/feed/index';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1, username: 'Lucas', curtidas:10, comentarios:2 },
                {id:2, username: 'Matheus', curtidas:2, comentarios:3 },
                {id:3, username: 'Julia', curtidas:3, comentarios:5 },
                {id:4, username: 'Diego', curtidas:0, comentarios:0 }
            ]
        };
    }

    render(){
        return(
            <div>

                {this.state.feed.map((item) => {
                    return(
                        <Feed key={item.id} username={item.username}
                        curtidas={item.curtidas}
                        comentarios={item.comentarios} />
                    );
                })}

            </div>
        );
    }
}

export default App;