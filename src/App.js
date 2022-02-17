import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import Cardwidget from './componentes/Cardwidget/Cardwidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import FuncionContador from './componentes/Contador/Contador';


function App() {
  return (
    <div className="App">      
      <NavBar />  
      <ItemListContainer greeting="Bienvenidos a mi tienda!"/>   
      <Cardwidget /> 
      <FuncionContador/>
    </div>
  );

}

export default App;





