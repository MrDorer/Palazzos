import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="bg-[#4EBCFF] w-full h-fit flex items-center justify-center pb-4">
        <h2 className="text-white text-4xl semibold border-b-[6px] font-playfair p-1">Palazzo's</h2>
      </div>
      <div className='bg-[#2972B6] w-full h-fit p-2 items-center justify-center flex flex-wrap text-white'>
        <ul className="flex gap-x-32">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/mujeres">Mujeres</Link>
          </li>
          <li>
            <Link to="/hombres">Hombres</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header;
