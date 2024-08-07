import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <>
   <header>
   <h1> CINEMA</h1>
   </header>
   <div>
    <table>
      <tr>
        <Link to={'/breve'}>
        <td>
          <img src="https://cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fasset%2Fmovie%2F8476%2Fcoraline-e-o-mundo-secreto-poster-desktop-5955c.jpg&w=3840&q=100" alt="" />
          <th>EM BREVE</th>
        </td>
        </Link>
        <Link to={'/cartaz'}>
        <td>
          <img src="https://media.fstatic.com/rT9Hxe7LDpcJUDnIeKwUyW6rzpo=/322x478/smart/filters:format(webp)/media/movies/covers/2024/06/cats_fX9LF5c.jpg" alt="" />
          <th>EM CARTAZ</th>
        </td>
        </Link>
        <Link to={'/pre'}>
        <td>
          <img src="https://br.web.img3.acsta.net/img/6c/71/6c71afa89fd8ed8999b3e04d8d794a0e.jpg" alt="" />
          <th>EM PREVENDA</th>
        </td>
        </Link>
      </tr>
     
    </table>
   </div>





   </>
  )
}
