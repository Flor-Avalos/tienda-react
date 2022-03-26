import { useState} from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  
  return (
    <div className="App">      
      <NavBar title ="Ecommerce" />  
      <ItemListContainer greeting="Hello"/>   
      <ItemDetailContainer/>
       
    </div>
  );
}
export default App;





