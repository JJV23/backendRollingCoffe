import express from 'express'
//node --watch index.js comando experimental para desarrollo 
console.log('Bienvenidos C74i lo mejor de rolling')

// 1- configurar un puerto 
const app = express();

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'));  
})
// 2- configurar middlewares

// 3- configuración de las rutas