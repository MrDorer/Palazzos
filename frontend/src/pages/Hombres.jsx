import React from 'react'
import HCategorias from '../components/HCategorias'
import ProductosPopH from '../components/ProductosPopH'
import BannerH from '../components/BannerH'

function Hombres() {
  return (
    <>
        <div className=" w-[58%] h-fit bg-[#FBFBFB] m-auto text-center">
            <HCategorias/>
            <ProductosPopH/>
            <BannerH/>
        </div>
    </>
  )
}

export default Hombres