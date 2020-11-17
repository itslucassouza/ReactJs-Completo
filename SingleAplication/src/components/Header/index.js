import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';

const Header = () => {
    return (
        <header>
            <div className="menu" id="Home">
                <nav>
                    <ul>
                        <li><Link smooth to="#Home">Home</Link></li>
                        <li><Link smooth to="#Sobre">Sobre</Link></li>
                        <li><Link smooth to="#Contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;