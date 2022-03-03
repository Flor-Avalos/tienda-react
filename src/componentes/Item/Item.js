import './Item.css';


// contenedor de cada Card

const Item = ({producto}) => {
    return (
      <div className='Card'>
      <h1> {producto.name} </h1>
      <img src= {producto.img}  width="200px" alt={producto.name}/>     
      
      </div>
        
    )
}

export default Item;