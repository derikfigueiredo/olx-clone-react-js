import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";


const Header = () => {
    return(
        <HeaderArea>
                <div className="container">
                    <div className="logo-area">
                        <Link to="/">
                        <span className="logo-o">O</span>
                        <span className="logo-l">L</span>
                        <span className="logo-x">X</span>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to='/signin'>Login</Link></li>
                            <li><Link to=''>Cadastrar</Link></li>
                            <li><Link to='' className="button">Poste um anúncio</Link></li>
                        </ul>
                    </nav>
                </div>
        </HeaderArea>
    )
}

export default Header;