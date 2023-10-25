import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express()

const conexion=mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'palazzos'
})

conexion.connect((error)=>{
   if(error){
      console.log("Upsss, algo salio mal", error)
   } else {
      console.log("Conexión realizada")
   }
})

app.use(cors())

app.get("/bannerm",(peticion,respuesta)=>{
    const sql="SELECT * FROM banner WHERE genero = 'mujer';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", banner:resultado})
        }
    })
})

app.get("/bannerh",(peticion,respuesta)=>{
    const sql="SELECT * FROM banner WHERE genero = 'hombre';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", banner:resultado})
        }
    })
})

app.get("/categoriasM",(peticion,respuesta)=>{
    const sql="SELECT * FROM categorias WHERE genero = 'mujer';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/categoriasH",(peticion,respuesta)=>{
    const sql="SELECT * FROM categorias WHERE genero = 'hombre';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/categorias-destacadas",(peticion,respuesta)=>{
    const sql="SELECT * FROM categorias WHERE destacado = true;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/productos-pop-m",(peticion,respuesta)=>{
    const sql="SELECT * FROM productos_populares WHERE genero = 'mujer';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})



app.get("/productos-pop-h",(peticion,respuesta)=>{
    const sql="SELECT * FROM productos_populares WHERE genero = 'hombre';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/ventas-flash",(peticion,respuesta)=>{
    const sql="SELECT * FROM ventas_flash;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/estilos",(peticion,respuesta)=>{
    const sql="SELECT * FROM estilos;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})


app.listen(8082,()=>{
    console.log('Servidor disponible')
})