import './NavBar.css'

const NavBar = () => {
    
  return (
      <nav className="NavBar">
        <div>
            <h3>Mi tienda con react</h3>
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