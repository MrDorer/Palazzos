import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcryptjs from 'bcryptjs';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();

app.use(bodyParser.json());

app.use(cors());



const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'palazzos',
});


conexion.connect((error) => {
    if (error) {
        console.log('Oops, something went wrong', error);
    } else {
        console.log('Connection established');
    }
});


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




app.post('/login', (req,res) => { //req = peticion o request || res = response o result 
    const datos = req.body
    const sql = 'SELECT * FROM usuarios WHERE correo = ?'
    const values = [datos.correo]

    conexion.query(sql,values, (error, resultados) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error de la bd, no?' });
        }else if (resultados.length === 0 || resultados[0].contrasena !== datos.contrasena) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });

        } else if(resultados[0].contrasena == datos.contrasena)
        res.json(resultados);
        console.log('terminado')
    })
})
app.post('/registro', (req, res) => {
    const datos = req.body;

    const insertSQL = 'INSERT INTO usuarios (correo, nombre, contrasena) VALUES (?,?,?)';
    const selectSQL = 'SELECT * FROM usuarios WHERE id = LAST_INSERT_ID()'; // Assuming 'id' is the auto-increment primary key

    const values = [datos.correo, datos.nombre, datos.contrasena];

    conexion.query(insertSQL, values, (error, resultados) => {
        if (error) {
            console.error('Error al intentar crear usuario: ' + error.message);
            res.status(500).json({ error: 'Error al intentar crear el usuario' });
        } else {
            // After inserting the user, retrieve the newly inserted user's information
            conexion.query(selectSQL, (selectError, selectResult) => {
                if (selectError) {
                    console.error('Error al intentar recuperar el usuario: ' + selectError.message);
                    res.status(500).json({ error: 'Error al intentar recuperar el usuario' });
                } else {
                    // Assuming selectResult contains the user information
                    res.json(selectResult);
                }
            });
        }
    });
});

app.get("/productosM",(peticion,respuesta)=>{
    const sql="SELECT * FROM productos WHERE genero = 'mujer';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/productosH",(peticion,respuesta)=>{
    const sql="SELECT * FROM productos WHERE genero = 'hombre';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", categorias:resultado})
        }
    })
})

app.get("/carrito",(peticion,respuesta)=>{
    const values = peticion.query.user;
    const sql="SELECT c.id AS Id_EnCarro, p.id AS IdProducto, u.id AS IdUsuario, p.nombre AS Producto_Nombre, c.cantidad AS Cantidad, p.img, ROUND(p.precio * c.cantidad,2) AS Total FROM carrito c JOIN productos p ON c.id_producto = p.id JOIN usuarios u ON c.id_usuario  = u.id and u.id = ?;"
    conexion.query(sql,values,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{  
            return respuesta.json({Estatus:"Ok", productos:resultado})
        }
    })
})

app.put("/carrito/suma/:id",(req,res) => {
    const id = req.params.id;
    const sql = "UPDATE carrito SET cantidad = (cantidad + 1) WHERE id = ?;"
    const values = [id]

    conexion.query(sql,values,(error,resultado) => {
        if(error){
            return res.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return res.json({Estatus:"Ok", productos:resultado})
        }
    })
})

app.put("/carrito/resta/:id",(req,res) => {
    const id = req.params.id;
    const sql = "UPDATE carrito SET cantidad = (cantidad - 1) WHERE id = ?;"
    const values = [id]

    conexion.query(sql,values,(error,resultado) => {
        if(error){
            return res.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return res.json({Estatus:"Ok", productos:resultado})
        }
    })
})

app.delete("/carrito/eliminar/:id",(req,res) => {
    const id = req.params.id;
    const sql = "DELETE FROM carrito WHERE id = ?;"
    const values = [id]

    conexion.query(sql,values,(error,resultado) => {
        if(error){
            return res.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return res.json({Estatus:"Ok", productos:resultado})
        }
    })
})

app.get("/usuarios",(peticion,respuesta)=>{
    const sql="SELECT * FROM usuarios"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{  
            return respuesta.json({Estatus:"Ok", usuarios:resultado})
        }
    })
})

app.delete("/usuario/eliminar/:id",(req,res) => {
    const id = req.params.id;
    const sql = "DELETE FROM usuarios WHERE id = ?;"
    const values = [id]

    conexion.query(sql,values,(error,resultado) => {
        if(error){
            return res.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return res.json({Estatus:"Ok", productos:resultado})
        }
    })
})

app.listen(8082,()=>{
    console.log('Servidor disponible')
})