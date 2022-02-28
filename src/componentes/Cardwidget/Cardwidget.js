import React from "react";

const Cardwidget = (backgroundColor = '#8C30F5', colorText ='white') =>{
    return  (
        <div>  
    
        <img src= {'./imagenes/carrito.jpg'} alt='carrito' style ={backgroundColor} />
        <p style ={backgroundColor, colorText}>0</p>

        </div>
        
    )
}

export default Cardwidget;
