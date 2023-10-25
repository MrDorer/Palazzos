import React from 'react'
import Categorias from '../components/Categorias'
import MCategorias from '../components/MCategorias'
import HCategorias from '../components/HCategorias'

function Categoria() {
  return (
    <>
        <div className=" w-[58%] h-fit bg-[#FBFBFB] m-auto text-center pb-8">
            <Categorias/>
            <HCategorias/>
            <MCategorias/>
        </div>
    </>
  )
}

export default Categoria