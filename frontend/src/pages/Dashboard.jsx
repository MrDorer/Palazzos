import React,{ useState, useEffect } from 'react'
import axios from 'axios'


function Dashboard() {
    const [update, setUpdate] = useState(0);
    const [usuarios, setUsuarios] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8082/usuarios')
          .then((respuesta) => {
            setUsuarios(respuesta.data.usuarios);
          })
          .catch((error) => console.log(error));
      }, [update]);

      const handleDeleteUsuario = (id) => {
        axios
          .delete(`http://localhost:8082/usuario/eliminar/${id}`)
          .then(() => {
            setUpdate(update + 1);
        })
          .catch((error) => {
            console.error('Error deleting', error);
          });
      }

  return (


    <>
        <div className=" w-[58%] h-fit bg-[#FBFBFB] m-auto">
            <h1 className='text-center m-4 text-xl'>Usuarios</h1>
            {usuarios ? (
                usuarios.map((usuario) => (
                    <div key={usuario.id} className=' flex justify-between w-full py-4 px-8'>
                        <div className='justify-between flex w-full'>
                            <h2 className="w-[25%] text-[#7F7F7F]">{usuario.nombre}</h2>
                            <h2 className="w-[25%] text-[#7F7F7F]">{usuario.correo}</h2>
                            <h2 className="w-[25%] text-[#7F7F7F]">{usuario.contrasena}</h2>
                            <h2 className="w-[8%] text-[#7F7F7F]">{usuario.fecha_creacion}</h2>
                            <button className="mx-1 font-normal border-2 rounded-md px-4 border-[#14C38E] text-[#14C38E] hover:text-[#00ff00] hover:border-[#00ff00] hover:bg-[#00ff00] hover:bg-opacity-20 transition-all ease-in-out focus:ring focus:ring-[#00FFAB]"
                            >Editar</button>
                            <button className="mx-1 font-normal border-2 border-[#C70039] text-[#C70039] rounded-md px-2 hover:text-[#D80032] hover:border-[#D80032] hover:bg-[#D80032] hover:bg-opacity-40 transition-all ease-in-out focus:ring focus:ring-[#ff0000] focus:bg-opacity-40 focus:text-[#ff0000]" 
                            onClick={() => {handleDeleteUsuario(usuario.id)}} >Eliminar</button>
                        </div>
                    </div>
                ))
                ) : (
                <p>Loading...</p>
                )}
        </div>
    </>
  )
}

export default Dashboard