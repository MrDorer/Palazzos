import React, { useEffect, useState } from 'react';
import axios from 'axios';
import blueCart from '../assets/blueCart.svg'
import trash from '../assets/trash.svg'

function Carro() {
    const [user,setUser] = useState('')
    const [productos, setProductos] = useState([]);
    const [update, setUpdate] = useState(0);


    const handleSuma = (id) => {
        axios
          .put(`http://localhost:8082/carrito/suma/${id}`)
          .then(() => {
            // Trigger a re-render by updating the state variable
            setUpdate(update + 1);
        })
          .catch((error) => {
            console.error('Error deleting', error);
          });
      }

      const handleResta = (id) => {
        axios
          .put(`http://localhost:8082/carrito/resta/${id}`)
          .then(() => {
            setUpdate(update + 1);
        })
          .catch((error) => {
            console.error('Error deleting', error);
          });
      }

      const handleDelete = (id) => {
        axios
          .delete(`http://localhost:8082/carrito/eliminar/${id}`)
          .then(() => {
            // Trigger a re-render by updating the state variable
            setUpdate(update + 1);
        })
          .catch((error) => {
            console.error('Error deleting', error);
          });
      }

      useEffect(() => {
        const usuario = localStorage.getItem('user');
        if (usuario) {
          setUser(usuario);
        }
      
        axios
          .get('http://localhost:8082/carrito', {
            params: { user: usuario } // Pass the user from local storage as a query parameter
          })
          .then((respuesta) => {
            setProductos(respuesta.data.productos);
          })
          .catch((error) => console.log(error));
      }, [update]);

  
    return (
      <>
      <div className='flex flex-wrap px-32 items-center py-10 content-center bg'>
        <div className='flex flex-wrap bg-slate-50 p-1'>
            <h2 className='w-full text-3xl text-[#597e8d] px-2 my-3 flex'> <img className='mr-4' src={blueCart}/> Tu carrito de compra</h2>
                
        {productos ? (
          productos.map((producto,index) => (
            <div className='flex flex-col w-[15.3%] mx-2 mb-6' key={index}>
                <div className='w-[100%]'>
                    <img className='w-[100%] h-[100%] object-cover ' src={producto.img}></img>
                </div>
                    <div className='min-h-[30px] w-[100%]'>
                        <p className=' text-xs text-center'>{producto.Producto_Nombre}</p>
                    </div>
                    <div className="flex justify-center items-center ">
                        <p className="flex items-center">
                            Cantidad:
                        </p>
                        <div className='flex items-center bg-slate-200 mx-2 border'>
                        <button className=" w-4  flex items-center justify-center bg-slate-100" onClick={() => {handleResta(producto.Id_EnCarro)}}>
                                -
                            </button>
                            <p className='px-1'>{producto.Cantidad}</p>
                            <button className=" w-4 flex items-center justify-center bg-slate-100" onClick={() => {handleSuma(producto.Id_EnCarro)}}>
                                +
                            </button>
                            
                        </div>
                        <button onClick={() => {handleDelete(producto.Id_EnCarro)}}> <img src={trash}/></button>
                    </div>

                <div className='w-full flex items-center h-8 justify-center'>

                    <div className=' h-6 m-2'>
                        <p className='font-bold text-center mb-4'>Total: ${producto.Total} MXN</p>
                    </div>

                    

                </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
      </div>
      </>
    );
  } 

export default Carro