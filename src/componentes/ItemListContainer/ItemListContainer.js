import React, {useState} from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../Asyncmok";

const ItemListContainer = (greeting, ... rest) =>{
    const [productos, setproductos] = useState ([])

        getProductos.then ( (resolve)=>{
            console.log(resolve);

        })

        return(
        <>
        
            <h1>{greeting}</h1>
            <ItemList/>

            </>
    )
}

export default ItemListContainer;