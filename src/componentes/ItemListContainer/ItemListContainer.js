import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = (greeting = 'Hello') =>{
    const [productos, setproductos] = useState ([])
        useEffect(()=> (
            console.log(fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone'))// tiene implicito un get
        ),[]  )
        .then ( (response)=>{
            return response.json()
        })
        .then (res =>{
            setproductos(res.results)
        })                
        // .catch( (error) =>{
        //     console.log(error)
        // })
        // .finally(()=>{
        // })
                 // porque no me toma el handle??
  
    // const handleOnnSumar = (quantity) => (
    //         console.log('se agregaron $(quantity) producos')
    //     )
    //     console.log(productos)
   
        return(
            <>        
            <h1>{greeting}</h1>
            <ItemList productos= {productos}/>
            </>
            //    {/* <ul> */}
            //     {/* {productos.map(producto =>{
            //         return <li key={productos.id}> {productos.title}</li>
            //         // productos.thumbnail y sube la foro en la card
            // })}
            // </ul> */}
    )
}

export default ItemListContainer;