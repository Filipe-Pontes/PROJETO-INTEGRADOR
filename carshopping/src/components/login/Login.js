import { useState } from 'react';
import './Login.css';

function Login(){

    function Logar(){
        return(
            console.log('logado!')
        )
    }

    const[CadCliente,setName] = useState();
    const[Password,setPassword] = useState();
    console.log(CadCliente);

    return (
        <section className="banner">
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setName(e.target.value)} type="email" id="email" name="email" required />
                    <label htmlFor="password">Senha:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                    <input onClick={Logar} type="submit" value="Entrar" />            
                </form>
                <p>Não tem uma conta? <a href="#" className="cad">Cadastre-se</a></p>
            </div>
        </section>
    )
}

export default Login;
