import React, { useEffect, useState } from 'react';
import axios from 'axios';


function VentasFlash() {
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8082/ventas-flash')
        .then((respuesta) => {
          setCategorias(respuesta.data.categorias);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
      <div className="flex flex-wrap justify-center p-6 gap-2">
      <h2 className='w-[100%]'>Ventas Flash</h2>
        {categorias ? (
          categorias.map((categoria) => (
            <div key={categoria.id} className='bg-zinc-500 m-2 w-36 h-36 text-white text-center'>
                <img className=' w-[100%] h-[100%] object-cover ' src={categoria.img} alt={categoria.nombre}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );
  } 

export default VentasFlash