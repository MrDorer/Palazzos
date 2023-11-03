import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    correo: '',
    contrasena: '',
    autenticado: false,
    user:'',
    nombre:''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const status = localStorage.getItem('Status');
    const correo = localStorage.getItem('correo');
    const user = localStorage.getItem('user')
    const nombre = localStorage.getItem('nombre')
    if (status === 'true') {
      setDatos({ ...datos, autenticado: true, correo, user, nombre });
    }
  }, []);

  useEffect(() => {
    console.log(datos.autenticado); 
    localStorage.setItem('correo', datos.correo);
    localStorage.setItem('Status', datos.autenticado);
    localStorage.setItem('user', datos.user)
    localStorage.setItem('nombre', datos.nombre)
  }, [datos.autenticado, datos.user]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/login', datos)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          console.log(respuesta.data[0].id)
          setDatos({ ...datos, autenticado: true, user:respuesta.data[0].id,  nombre:respuesta.data[0].nombre});
          
          console.log('Bien del front')
        } else {
          setError('Credenciales incorrectas, inténtalo de nuevo');
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión: ' + error);
        setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
      });
  };

  const cerrarSesion = () => {
    localStorage.clear();
    setDatos({ ...datos, autenticado: false });
  };

  if (datos.autenticado) {
    navigate('/');
    return null;
  }

  return (
    !datos.autenticado ? (
      <form onSubmit={handleLogin}>
       
  <div className="bg-white rounded-sm p-2 w-[50%] mx-auto h-fit border-x-2 border-b-4 border-t flex items-center flex-wrap py-[5%]">
    <div className='w-full text-center mb-4'>
      <h2 className='text-3xl text-[#159D95]'>Iniciar sesion</h2>
    </div>
    <div className="flex flex-col items-center justify-center w-full my-3">
    <label className="text-md w-[50%] p-1.5">Correo:</label>
    <input
      className="border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%]"
      type="email"
      placeholder='ejemplo@gmail.com'
      name='correo'
      value={datos.correo}
      onChange={(e) => { setDatos({ ...datos, correo: e.target.value }) }}
    />
  </div>

  <div className="flex flex-col items-center justify-center w-full my-3">
    <label className="text-md w-[50%] p-1.5">Contraseña:</label>
    <input
      className="border-[#159D95] border rounded-sm px-2 py-[.5%] w-[50%]"
      
      placeholder='********'
      name='contrasena'
      value={datos.contrasena}
      onChange={(e) => { setDatos({ ...datos, contrasena: e.target.value }) }}
              
    />
  </div>

  <div className="w-full flex justify-center">
    <h4>Recordarme</h4>
    <input className="mx-2 my-2" type="checkbox" />
  </div>

  <div className="text-center justify-center w-full mb-5 mt-2">
    <button
      type="submit"
      className="bg-[#5DC1B9] rounded-sm w-[30%] text-white"
    >
      INICIAR SESIÓN
    </button>
  </div>

  {error && <p className="text-red-500 text-center">{error}</p>}

  <div className="text-center justify-center w-full flex">
    <h3>¿Aún no tienes cuenta? </h3>
    <Link to="/registro">
      <h3 className="text-[#159D95] px-2">Regístrate</h3>
    </Link>
  </div>
</div>
       
      </form>
    ) : (
      navigate('/')
    )
  );
}

export default Login;

