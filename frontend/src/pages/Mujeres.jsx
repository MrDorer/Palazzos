import React from 'react'
import MCategorias from '../components/MCategorias'
import ProductosPopM from '../components/ProductosPopM'
import BannerM from '../components/BannerM'

function Mujeres() {
  return (
    <>
        <div className=" w-[58%] h-fit bg-[#FBFBFB] m-auto text-center">
            <MCategorias/>
            <ProductosPopM/>
            <BannerM/>
        </div>
    </>
  )
}

export default Mujeres