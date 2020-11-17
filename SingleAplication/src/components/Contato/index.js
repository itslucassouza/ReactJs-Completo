import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';

const Contato = () => {
    return (
        <div className="home" id="Contato">
            <h1>Entre em contato</h1>
            <h2>Telefone (11) 999 999 99</h2>
            <h3>Endereço : Aguma rua</h3>
            <Link smooth to="#Home" >Ir para Home</Link>
        </div>
    );
}

export default Contato;