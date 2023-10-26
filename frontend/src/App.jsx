import { useState } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Mujeres from './pages/Mujeres'
import Hombres from './pages/Hombres'
import Categoria from './pages/Categorias'
import Nosotros from './pages/Nosotros'
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mujeres" element={<Mujeres/>}></Route>ñ
          <Route path="/hombres" element={<Hombres/>}></Route>
          <Route path="/categorias" element={<Categoria/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
