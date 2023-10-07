import {useState} from 'react';
import React from 'react';
import './Login.css';

function Login(){

    const [name, setName] = useState()
    const [password, setpassword] = useState()
    console.log(`O e-mail é:${name} e a senha é:${password}`)

    return(
        <section className="banner">
                <div className="login-container">
                    <h1>Login</h1>
                    <form action="#" method="POST">
                        <label htmlFor="email">Email:</label>
                        <input onChange={(e) => setName(e.target.value)} type="email" id="email" name="email" required />  
                        <label htmlFor="password">Senha:</label>
                        <input onChange={(e) => setpassword(e.target.value)} type="password" id="password" name="password" required />
                        <input type="submit" value="Entrar" />          
                    </form>
                    <p>Não tem uma conta? <a href="#" className="cad">Cadastre-se</a></p>
                </div>
            </section>
    )
}

export default Login; 