import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/logotipo.png';

function Cliente() {
    const [showSubButtons, setShowSubButtons] = useState(false);

    return (
        <div className="App">
            <a className="nav-link" onClick={() => setShowSubButtons(!showSubButtons)}>
                Cliente
            </a>
            {showSubButtons && (
                <div className="subButtons">
                    <a className="nav-link">Cadastrar Clientes</a>
                    <a className="nav-link">Listar Clientes</a>
                </div>
            )}
        </div>
    );
}

function Servico() {
    const [showSubButtons, setShowSubButtons] = useState(false);

    return (
        <div className="App">
            <a className="nav-link" onClick={() => setShowSubButtons(!showSubButtons)}>
                Serviço
            </a>
            {showSubButtons && (
                <div className="subButtons">
                    <a className="nav-link">Cadastrar Serviços</a>
                    <a className="nav-link">Listar Serviços</a>
                </div>
            )}
        </div>
    );
}

function Pagamento() {
    const [showSubButtons, setShowSubButtons] = useState(false);

    return (
        <div className="App">
            <a className="nav-link" onClick={() => setShowSubButtons(!showSubButtons)}>
                Pagamento
            </a>
            {showSubButtons && (
                <div className="subButtons">
                    <a className="nav-link">Cadastrar Pagamentos</a>
                    <a className="nav-link">Listar Pagamentos</a>
                </div>
            )}
        </div>
    );
}

function Login(){
    const[Logar, setLogar] = useState(false);

    return(
        <div className='App'>
            <a className='nav-link' onClick={() => setLogar(!Logar)}>
                Login
            </a>
            {
                Logar &&(
                    <div className='subButtons'>
                        <a className='nav-link'>
                            Já Tenho uma Conta
                        </a>
                        <a className='nav-link'>
                            Cadastrar usuário
                        </a>
                    </div>
                )
            }
        </div>
    );
}

function Header() {
    return (
        <header>
            <nav className='navHeader'>
                <div className="logo">
                    <img className="logo-image" src={logo} alt="Car Shopping"/>
                </div>

                <ul className='test'>
                    <li>
                        <Cliente />
                    </li>
                    <li>
                        <Servico/>
                    </li>
                    <li>
                        <Pagamento/>
                    </li>
                    <li>
                        <Login/>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;