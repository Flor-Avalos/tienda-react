import { getProductos } from "../mock/productos";
import  Item from './Item' 


const ItemList= (productos) => {
    return (
        <>
        {productos.map ((producto) =>(
             <item   producto={producto} key={producto.id} />
                
        )) }  
        
        </>
    )
} 

export default ItemList;
