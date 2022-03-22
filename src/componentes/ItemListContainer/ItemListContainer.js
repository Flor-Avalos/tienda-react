import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../mock/productos";

const ItemListContainer = (greeting, ... rest) =>{
    const [productos, setproductos] = useState ([])

        getProductos
        .then ( (resolve)=>{
            setproductos(resolve);

        })
        .catch( (error) =>{
            console.log(error)
        })
        .finally(()=>{s
        })
  
        return(
            <>        
            <h1>{greeting}</h1>
            <ItemList item={productos}/>

            </>
    )
}

export default ItemListContainer;