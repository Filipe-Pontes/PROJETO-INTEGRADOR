import React from 'react';
import './Cadastro.css';

function Cadastro(){
    return(
        <div className="login-container">
                <h1>Cadastro</h1>
                <form action="../html/Login.html" method="POST">
                    <label htmlFor="nome" className="titulo-cad">Nome:</label>
                    <input type="text" id="nome" name="nome" /> <br />
                    <label htmlFor="birthdate" className="titulo-cad">Data de nascimento:</label>
                    <input type="date" id="birthdate" name="birthdate"/><br /><br />
                    <label htmlFor="email" className="titulo-cad">E-mail:</label>
                    <input type="email" id="email" name="email"/><br />
                    <label htmlFor="password" className="titulo-cad">Senha:</label>
                    <input type="password" id="password" name="password" required/><br />
                    <label htmlFor="genero" className="titulo-cad">Gênero:</label>
                    <select id="genero" name="genero"><br />
                      <option value="" className="titulo-cad">Selecione</option>
                      <option value="feminino">Feminino</option>
                      <option value="masculino">Masculino</option>
                      <option value="outro">Outro</option>
                    </select><br />
                    <label htmlFor="endereco" className="titulo-cad">Endereço:</label>
                    <input type="text" id="endereco" name="endereco"/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
    )
}

export default Cadastro;
