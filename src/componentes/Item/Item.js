import './Item.css';


// contenedor de cada Card

const Item = ({producto}) => {
    return (
      <div className='Card'>
      <h1> {producto.title} </h1>
      <img src= {producto.thumbnail}  width="200px" alt={producto.title}/>     
      
      </div>
        
    )
}

export default Item;