import { getProductos } from "../mock/productos";
import  Item from './Item';
import './itemList.css';

//contenedor de todo lo que renderizamos


function ItemList(productos) {
    return (
        <div className='card'>
            {productos.map((producto) => (
                <item producto={producto} key={producto.id} />

            ))}
        </div>
    );
} 

export default ItemList;
