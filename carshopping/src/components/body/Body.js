import './Body.css';
function Body(){
    return(
        <>
            <div className="texto">
            <div id="borda-texto">
                <h1 className="titulo">Bem-vindo ao CarShopping</h1>
                <h2 className="sub_titulo">Sua venda e troca de carros elétricos</h2>
            </div>
            <div className="botoes">
                <a href="./SaibaMais.html"><button class="n-overlay">Saiba Mais</button></a>
                <a href="../html/Login.html"><button class="overlay">Login</button></a>
            </div>
        </div>
        </>
    )
}

export default Body