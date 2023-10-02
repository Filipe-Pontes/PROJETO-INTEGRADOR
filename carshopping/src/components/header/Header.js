import './Header.css';
import logo from '../../assets/img/logotipo.png';

function Header(){
    return(
    <header>
        <nav className='navHeader'>
            <div className="logo">
                <a href="#">
                    <img className="logo-image" src={logo} alt="Car Shopping"/>
                </a>
            </div>
    
            <ul>
                <li><a href="../html/home.html">Home</a></li>
                <li><a href="../html/Sobre.html">Sobre</a></li>
                <li><a href="../html/Servicos.html">Serviços</a></li>
                <li><a href="../html/Contatos.html">Contato</a></li>
                <li><a href="../html/login.html" >Login</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header