const express=require('express');
const morgan=require('morgan');
const path=require('path');/*este modulo une directorios sin importar windows o linux*/
const { render } = require('ejs');

const app=express();

// configuraciones(settings)
app.set('port',3000);
app.set('views',path.join(__dirname,'/views'))//es para decirle que views esta dentro de src
app.engine('html', require('ejs').renderFile)//te premite ultilizar html en los nombres de los archivos y 
//aun asi poder renderizar con ejs
app.set('view engine','ejs')/*extiende la funcionalidad del html*/


// middlewares

// rutas
// se usa el index de rutas creado
app.use(require('./routes/index'))
// app.get('/',(req,res)=>{
//     res.render('index')
//     // res.sendFile(path.join(__dirname ,'/views/index.html')) 
//     /*__dirname da la direccion de donde se ejecuta y lo demas
//     lo complementa para ejecutar el index */
// })

// static file
app.use(express.static(path.join(__dirname,'/public')))

// escuchando al servidor
app.listen(app.get('port'),()=>{
    console.log("servidor",app.get('port'))
})