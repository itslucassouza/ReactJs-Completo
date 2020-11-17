import React from 'react';
import Inicio from '../Inicio';
import Sobre from '../Sobre';
import Contato from '../Contato';
import '../../style.css';


const Home = () => {
    return (
        <div>
        <Inicio/>
        <Sobre />
        <Contato/>
        </div>
    )
}

export default Home;