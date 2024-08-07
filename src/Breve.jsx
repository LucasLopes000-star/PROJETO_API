import React from 'react'
import './Breve.css'
import { Link } from 'react-router-dom';
fetch('./breve.json').then(resto=>resto.json()).then(dados=>mostraFilmesB(dados))
function mostraFilmesB(dados){
    const tabela = document.querySelector("#FilmeBreve")
    tabela.innerHTML = '';     
    dados.forEach(item => {
            const tabBreve =`<td>${item.titulo}</td><td><img src=${item.poster}></td> <td>${item.genero}</td> <td>${item.duraçao}</td>`
            tabela.innerHTML += tabBreve
        
    });
}
function atualizarPagina() {
  location.reload();}
 function Breve() {
  return (
    <>
    <div>
     <Link to={'/'}>HOME</Link>
      <header>
      <h1>EM BREVE</h1>
      <button onClick={atualizarPagina}>CARREGAR API</button>
      </header>
      
     <table id='FilmeBreve'>
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
export default Breve