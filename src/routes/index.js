
// Aqui se importa express para usar su metodo router que es para crear
//rutas en distintos archivos
const express=require('express')
const router=express.Router();


router.get('/',(req,res)=>{
    res.render('index.html',{title:'Primer sitio'})
})

router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'Contacto'})
})

router.get('/about',(req,res)=>{
    res.render('about.html',{title:'Acerca de'})
})

// luego se exporta al index principal
module.exports=router;