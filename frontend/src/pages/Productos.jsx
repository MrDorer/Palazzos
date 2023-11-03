import React,{ useState, useEffect } from 'react'
import axios from 'axios'

function Productos() {

    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8082/productosM')
        .then((respuesta) => {
          setProductos(respuesta.data.categorias);
        })
        .catch((error) => console.log(error));
    }, []);
  

  return (
    <>

      <div className='flex flex-wrap px-32 items-center py-10 content-center'>
        <div className='flex flex-wrap'>
        {productos ? (
            productos.map((producto, index) => (
            
            <div className='flex flex-col w-[15.4%] mx-2 mb-6' key={index}>
                <div className='w-[100%]'>
                    <img className='w-[100%] h-[100%] object-cover ' src={producto.img}></img>
                </div>
                    <div className='min-h-[30px] w-[100%]'>
                        <p className=' text-xs text-center'>{producto.nombre}</p>
                    </div>
                <div className='w-full flex items-center h-8 justify-center'>
                    <div className=' h-6 m-2'>
                        <p className='font-bold text-center mb-4'>${producto.precio} MXN</p>
                    </div>
                    <button className='text-xs border-[#2972B6] border-2 text-[#2972B6] rounded-md px-1'>Comprar</button>
                </div>
            </div>

            ))
        ) : (
            <p>Loading...</p>
        )}
        </div>
      </div>
 
 


    </>
  )
}

export default Productos