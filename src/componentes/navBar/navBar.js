import './NavBar.css'
import '../Cardwidget/Cardwidget'

const NavBar = (greeting, ...rest) => {
    
  return (
      <nav className="NavBar">
        <div>
          <img src= {'./imagenes/Logo.jpg'} alt='logo'/>
      
        </div>
        <div className="Categories">       
                    
          <button className='Option'>Alfajores</button>
          <button className='Option'>Dulces</button>
          <button className='Option'>Chocolates</button>
        </div>
      </nav>
  )
}

export default NavBar;