import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Breve from './Breve'
import Cartaz from './Cartaz'
import Prevenda from './Prevenda'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/breve' element={<Breve/>} />
        <Route path='/cartaz' element={<Cartaz/>} />
        <Route path='/pre' element={<Prevenda/>} />
 

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
