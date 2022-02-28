


const productos = [
    {id:1, nombre: 'Alfajores', precio: 120, descrip: 'sin azucar, sin Taac', img:".."},
    {id:2, nombre: 'Chocolate en rama', precio: 150, descrip: 'sin azucar, sin Taac', img: ".."},
    {id:3, nombre: 'Chocolates en barra', precio: 150, descrip: 'sin azucar, sin Taac', img: ".."},
    {id:4, nombre: 'Bombones', precio: 100, descrip: 'rellenos, sin azucar, sin Taac', img: "..."}
];


export const getProductos= () =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos)}, 2000)
    })
}
