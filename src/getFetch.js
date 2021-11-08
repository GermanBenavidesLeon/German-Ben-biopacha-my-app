
const Productos = [
    {id: 1, name: "Nueces", description: 'Frutos secos', price: 400, imagen:'https://siemprejoven.es/Imagenes.ashx?FileName=/Imagenes/Contenidos/259/Cabecera/nueces-cerradas.jpg&xCrop=600&yCrop=349&xCoord=0&yCoord=36&xImage=600&yImage=421&xOrigCrop=688&yOrigCrop=400&Crop=true&Format=jpg'},
    {id: 2, name: "Mani", description: 'Frutos secos', price: 200, imagen:'https://www.saborusa.com/wp-content/uploads/2019/10/Sabias-que-el-mani-es-un-super-alimento-Foto-destacada.png'}, 
    {id: 3, name: "Castañas de caju", description: 'Frutos secos', price: 300, imagen:'https://www.dieteticasoler.com.ar/productos/1526054711/01_1526054711.jpg'},
    {id: 4, name: 'Almendras', description: 'Frutos secos', price: 500, imagen:'https://static1.abc.es/media/bienestar/2020/09/30/almendras-ficha-k4CF--620x349@abc.jpg'},
    {id: 5, name: 'Pasas', description: 'Frutos secos', price: 300, imagen:'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/10/cuantos-gramos-de-pasas-de-uva-hay-que-comer-por-dia.jpg'},
    {id: 6, name: 'Arandanos secos', description: 'Frutos secos', price: 450, imagen:'https://kipa.warmibusiness.com/wp-content/uploads/2020/09/arandanos.jpg'}
];


export const getFetch = new Promise((resolve, reject)=>{
    const condition=true
     if(condition) {
        setTimeout(()=>{
            resolve(Productos)
        }, 2000)
     } else{
         setTimeout(()=>{
           reject('404 not found')
         }, 2000)
     }
 })
 