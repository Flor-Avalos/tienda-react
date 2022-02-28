import ItemList from "../ItemList/ItemList";


const ItemListContainer = (greeting, ... rest) =>{
    return(
        <>
        
            <h1>{greeting}</h1>
            <ItemList/>

            </>
    )
}

export default ItemListContainer;