import  Item from '../Item/Item';
import '../ItemListContainer/ItemListContainer.css'

//contenedor de todo lo que renderizamos

function ItemList(productos) {
    return (
        <div className='card'>
            {productos.map((producto) => <Item key={producto.id} producto={producto}  />

            )}
        </div>
    );
} 

export default ItemList;
