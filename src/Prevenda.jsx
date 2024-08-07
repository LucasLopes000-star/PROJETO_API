import React from 'react'
import './Breve.css'
import { Link } from 'react-router-dom';

fetch('./pre.json').then(res=>res.json()).then(dados=>mostraFilmesB(dados))
function mostraFilmesB(dados){
    const tabela = document.querySelector("#FilmePre")
    tabela.innerHTML='';     
    dados.forEach(item => {
            const tabPre =`<td>${item.titulo}</td><td><img src=${item.poster}></td> <td>${item.genero}</td> <td>${item.duraçao}</td>`
            tabela.innerHTML += tabPre
        
    });
}
function atualizarPagina() {
  location.reload();}
 function Pre() {
  return (
    <>
    <div>
  <Link to={'/'}>HOME</Link>
      <header>
      <h1>EM PRE-VENDA</h1>
      <button onClick={atualizarPagina}>CARREGAR API</button>
      </header>
      
     <table id='FilmePre'>
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
export default Pre
