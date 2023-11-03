import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cart from '../assets/cart.svg'

function Header() {

  const navigate = useNavigate()

  const [nombre,setNombre] = useState('')
  const [estatus,setEstatus] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const cerrarSesion = () => {
    localStorage.clear();
    setIsOpen(false)
    setEstatus(false)
    navigate('/')
  };

  useEffect(() => {
    setEstatus(localStorage.getItem('user'))
    setNombre(localStorage.getItem('nombre'))
  }, )

  return (
    <>
      <div className="bg-[#4EBCFF] w-full h-fit flex items-center justify-center pb-4 text-center">
        <div className='mx-[43%]'>
          <h2 className="text-white text-4xl semibold border-b-[6px] font-playfair p-1 ">Palazzo's</h2>
        </div>
          {
            !estatus ? (
              <Link to="/login">
                  <FontAwesomeIcon className='text-white text-xl right-[20%]' icon={faUser} style={{ float: "right" }} />
              </Link>
            ) : (
              <button onClick={() => {setIsOpen(true)}}><FontAwesomeIcon className='text-white text-xl right-[20%]' icon={faUser} style={{ float: "right" }} /></button>
            )
          }
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
    

{ isOpen &&(
  <div className="absolute top-10 right-3 flex justify-end items-start">
  <div className="bg-white p-5 rounded border border-[#14B8A6]  flex flex-col justify-start items-center h-2/2 w-2/2 ">
  <button
      className="font-bold text-sm hover:text-gray-400 text-black absolute top-0 right-0 p-2"
      onClick={() => setIsOpen(false)}>
      X
    </button>
      <p className='mb-2'>Hola {nombre}!</p>
    <div className="w-3/4 flex flex-col justify-end items-center">
      
      <Link to='carro'>
        <button className="text-white px-2 border bg-teal-500 rounded-md w-32 flex items-center gap-2" >
          <img src={cart}/>Mi carrito
        </button>
      </Link>

      <button className="text-white bg-red-600  m-3 px-2 border border-red-600 rounded-md w-32
      "
      onClick={() => cerrarSesion()}
      >
        Cerrar Sesion
      </button>
    </div>
  </div>
  </div>
)
}

{/*Final modal*/}


</>
  );
}

export default Header;
