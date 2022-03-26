
const productos = [
    {
        id:1, 
        nombre: 'Alfajores',
        precio: 120,
        descripcion: 'sin azucar, sin Taac', 
        img:'./imagenes/alfajores.jpg',
        categoria: 'dulceria',
    },
    {
        id:2,
        nombre: 'Chocolate en rama',
        precio: 150,
        descrip: 'sin azucar, sin Taac',
        img:'./imagenes/chocolate.jpg',
        categoria: 'dulceria',
    },
    {
        id:3,
        nombre: 'Chocolates en barra',
        precio: 150,
        descrip: 'sin azucar, sin Taac',
        img: './imagenes/barras.jpg',
        categoria: 'dulceria',
    },
    {
        id:4,
        nombre: 'Bombones',
        precio: 100, 
        descrip: 'rellenos, sin azucar, sin Taac',
        img: './imagenes/bombones.jpg',
        categoria: 'dulceria',
    }
];

export const getProductos= () =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos)}, 2000)
    })
}

export const getProductos= () =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos [0])}, 2000)
    })
}
