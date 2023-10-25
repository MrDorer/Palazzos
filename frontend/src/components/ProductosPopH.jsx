import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ProductosPopH() {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8082/productos-pop-h')
        .then((respuesta) => {
          setProductos(respuesta.data.categorias);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
      <div className="flex flex-wrap justify-center p-6 gap-2">
      <h2 className='w-[100%]'>Productos populares</h2>
        {productos ? (
          productos.map((producto) => (
            <div key={producto.id} className='bg-zinc-500 m-2 w-36 h-52 text-white text-center'>
                <img className=' w-[100%] h-[100%] object-cover ' src={producto.img} alt={producto.nombre}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );
  } 

export default ProductosPopH