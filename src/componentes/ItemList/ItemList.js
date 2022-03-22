
import { getProductos } from "../mock/productos";
import Item from './Item';
import './ItemList.css';

//contenedor de todo lo que renderiza


function ItemList(productos) {
    return (
        <div className='card'>
            {productos.map((producto) => (
                <Item producto={producto} key={producto.id} />

            ))}
        </div>
    );
} 

export default ItemList;
