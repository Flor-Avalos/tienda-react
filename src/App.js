import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import Cardwidget from './componentes/Cardwidget/Cardwidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import FuncionContador from './componentes/Contador/Contador';


function App() {

  const addToCart = (number)=>{
    console.log(`se agregaron al carrito ${number} items`)
  }
  return (
    <div className="App">      
      <NavBar />  
      <ItemListContainer greeting="Bienvenidos a mi E-commerce!"/>   
      <Cardwidget /> 
      <FuncionContador stock={10} initial={0}/>
    </div>
  );
}
export default App;





