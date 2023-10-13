import './Body.css';
import Login from '../login/Login';
import SaibaMais from '../saibamais/SaibaMais';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Body(){
    function Logar(){
        console.log('Clicado em logar')
    }

    function SaibaMais(){
        console.log('Clicado em Saiba-Mais') 
    }

    return(
        <div className="texto">
            <div id="borda-texto">
                <>
                    <h1 className="titulo">Bem-vindo ao CarShopping</h1>
                </>
                <h2 className="sub_titulo">Sua venda e troca de carros elétricos</h2>
            </div>
            <div className="botoes">
                <Link to="/saiba-mais">
                    <button onClick={SaibaMais} className="n-overlay">Saiba Mais</button>
                </Link>
                <Link to="/login">
                    <button onClick={Logar} className="overlay">Login</button>
                </Link>
            </div>
        </div>
    )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/saiba-mais" element={<SaibaMais/>}/>
      </Routes>
    </Router>
  );
}

export default App;
