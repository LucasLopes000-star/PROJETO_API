import React from 'react'
import './Breve.css'
import { Link } from 'react-router-dom';
fetch('./cartaz.json').then(rest=>rest.json()).then(dados=>mostraFilmesB(dados))
function mostraFilmesB(dados){
    const tabela = document.querySelector("#FilmeCartaz")
    tabela.innerHTML='';     
    dados.forEach(item => {
            const tabCart =`<td>${item.titulo}</td><td><img src=${item.poster}></td> <td>${item.genero}</td> <td>${item.duraçao}</td>`
            tabela.innerHTML += tabCart
        
    });
}
function atualizarPagina() {
  location.reload();}
 function Cartaz() {
  return (
    <>
    <div>
   <Link to={'/'}>HOME</Link>
      <header>
      <h1>EM CARTAZ</h1>
      <button onClick={atualizarPagina}>CARREGAR API</button>
      </header>
      
     <table id='FilmeCartaz'>
      <tr>
        <td>NOME</td>
        <td>IMAGEM</td>
        <td>GENERO</td>
        <td>DURAÇÃO</td>
      </tr>
     </table>

    </div>
    </>
  )
}
export default Cartaz