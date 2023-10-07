import './App.css';
import logo from './assets/img/logotipo.png';
import background from './assets/img/background.jpg';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cadastro from './components/cadastro/Cadastro';

function App() {
  return (
    <>
      <Header/>
      <Cadastro/>
      <Footer/>
    </>
  )
}

export default App;
