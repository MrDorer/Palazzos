import React, { useEffect, useState } from 'react';
import axios from 'axios';


function BannerM() {
    const [Banners, setBanners] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8082/bannerm')
        .then((respuesta) => {
          setBanners(respuesta.data.banner);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
      <div className="flex flex-wrap justify-center p-6 gap-2">
      <h2 className='w-[100%]'>Estilos</h2>
        {Banners ? (
          Banners.map((Banner) => (
            <div key={Banner.id} className='bg-zinc-500 m-2 w-[100%] h-72 text-white text-center'>
                <img className=' w-[100%] h-[100%] object-cover ' src={Banner.img} alt={Banner.nombre}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );
  } 

export default BannerM