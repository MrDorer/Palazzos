import React from 'react'
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {faTumblr}  from '@fortawesome/free-brands-svg-icons';
import {faPinterestP} from '@fortawesome/free-brands-svg-icons';
import {faInstagram}  from '@fortawesome/free-brands-svg-icons';
import {faTwitter}  from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
    <div className="bg-[#4EBCFF] w-full h-fit flex items-center justify-center px-4 py-8 text-white gap-16 text-sm">
        <ul className='max-w-[14.3%] flex flex-col gap-2'>
            <li>+52 9981639231</li>
            <li className='border-b-2 w-[71%] pb-0.5 text-center'>palazzos@gmail.com</li>
            <li>Carretera Cancún-Aeropuerto
                S.M 299-Km. 11.5, 77565 Q.R.</li>
        </ul>
        <ul>
            <li><h3 className='font-semibold text-base'>Acerca de nosotros</h3></li>
            <li className='text-[#F8F8F8]'>Quienes somos</li>
            <li className='text-[#F8F8F8]'>Responsabilidad</li>
            <li className='text-[#F8F8F8]'>social</li>
            <li className='text-[#F8F8F8]'>Empleos</li>
            <li className='text-[#F8F8F8]'> Sala de prensa</li>
        </ul>
        <ul>
            <li><h3 className='font-semibold text-base'>Ayuda y apoyo</h3></li>
            <li className='text-[#F8F8F8]'>Informacion de envio</li>
            <li className='text-[#F8F8F8]'>Devolucion</li>
            <li className='text-[#F8F8F8]'>Reembolso</li>
            <li className='text-[#F8F8F8]'>Realizar pedidos - Guia</li>
            <li className='text-[#F8F8F8]'>Guia de tallas</li>
            <li></li>
        </ul>
        <div className=' w-[31%] h-fit block'>
            <label className='text-sm'>Suscríbase para recibir  ofertas promociones y  noticias acerca de la pagina</label>
            <input className='px-2 py-1 w-[82%] rounded-sm text-[#8F8F8F]' type='email' placeholder="Direccion de email"></input>
            <button className="bg-[#945CB4] px-[4%] py-1 rounded-sm " type="submit">Enviar</button>

            <div className='py-3 w-[90%] flex justify-center gap-[17%]'>
                <FontAwesomeIcon icon={faFacebookF} size="xl" />
                <FontAwesomeIcon icon={faTumblr} size="xl" />
                <FontAwesomeIcon icon={faPinterestP} size="xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#ffffff",}} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer