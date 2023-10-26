import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
            
    
   <div className='bg-white rounded-sm p-2 w-[50%] mx-auto h-fit border-x-2 border-b-4 border-t flex items-center flex-wrap py-[5%]'>

   <div className='flex flex-col items-center justify-center w-full my-3'>
        <label className='text-md w-[50%] p-1.5'>Correo:</label>
          <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%]'
          type='email'
          placeholder='ejemplo@gmail.com'
          />
      </div>

      <div className='flex flex-col items-center justify-center w-full my-3'>
        <label className='text-md w-[50%] p-1.5'>Contraseña:</label>
          <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%] '
          type='password'
          placeholder='********'
          />
      </div>

      <div className="w-full flex justify-center "> 
        <h4 >Recordarme</h4>
        <input className="mx-2 my-2 "type="checkbox"></input>
      </div>

      <div className='text-center justify-center  w-full mb-5 mt-2'>
          <button type='submit ' className='bg-[#5DC1B9] rounded-sm w-[30%] text-white'>INICIAR SESION</button>
      </div>

     <div className='text-center justify-center w-full flex '>
     <h3>¿Aun no tienes cuenta? </h3>
     <Link to="/registro">
      <h3 className='text-[#159D95] px-2'>Registrate</h3>
     </Link>
     </div>

    </div>
    
   </>
        
    
  )
}

export default Login