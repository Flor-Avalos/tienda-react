import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';



function App() {
  return (
    <div className="App">      
      <NavBar />  
      <ItemListContainer greeting="Bienvenidos a mi E-commerce!"/>   
            
    </div>
  );

}

export default App;





