import React from 'react'
import Categorias from '../components/Categorias'
import VentasFlash from '../components/VentasFlash'
import Estilos from '../components/Estilos'

function Home() {
  return (
    <>
        <div className=" w-[58%] h-fit bg-[#FBFBFB] m-auto text-center">
            <Categorias/>
            <VentasFlash/>
            <Estilos/>
        </div>
    </>
  )
}

export default Home