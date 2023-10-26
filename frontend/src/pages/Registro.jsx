import React from 'react'
 

function Registro() {
  return (
    <>
    <div className='bg-white rounded-sm p-2 w-[50%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center flex-wrap py-20'>

    <div className='flex flex-col items-center justify-center w-full'>
      <label className='text-md w-[50%] p-1.5'>Nombre: </label>
        <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%] '
        type='text'
        placeholder='Nombre'
        />
    </div>



    <div className='flex flex-col items-center justify-center w-full'>
      <label className='text-md w-[50%] p-1.5'>Contraseña:</label>
        <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%] '
        type='password'
        placeholder='********'
        />
    </div>

    <div className='flex flex-col items-center justify-center w-full'>
      <label className='text-md w-[50%] p-1.5'>Confirmar Contraseña:</label>
        <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%] '
        type='password'
        placeholder='********'
        />
    </div>

    <div className='flex flex-col items-center justify-center w-full'>
      <label className='text-md w-[50%] p-1.5'>Correo:</label>
        <input className='border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%] '
        type='email'
        placeholder='ejemplo@gmail.com'
        />
    </div>

    <div className="w-full flex justify-center my-2"> 
        <h4 >Recordarme</h4>
        <input className="mx-2 my-2 "type="checkbox"></input>
      </div>


    <div className='text-center justify-center mt-3 mb-4 w-full'>
        <button type='submit ' className='bg-[#5DC1B9] rounded-sm p-0.5 w-[30%] text-white'>Registrate</button>
    </div>

    
    </div>
    </>

  
  )
}

export default Registro