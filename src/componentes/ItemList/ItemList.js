import { getProductos } from "../../Asyncmok";


const ItemList= () => {
    return (
        <ul>
        {productos.map (producto =>{
            return <Item key={producto.id}> 
            {producto.name}</Item>
                
        })
        }        
        </ul>
    )
} 

export default ItemList;
