import './NavBar.css'



const NavBar = () => {

  const handleAlfajor= () => {
  console.log('Alfajores')
}
  const handleDulces= () => {
  console.log('Dulces')
}
  const handleChoco= () => {
  console.log('Chocolates')
}
    
  return (
      <nav className="NavBar">
        <div>
          <img src= {'./imagenes/Logo.jpg'} alt='logo'/>      
        </div>
        <div className="Categories">                      
          <button  handleclick= {handleAlfajor}>Alfajores</button>
          <button handleclick={handleDulces}>Dulces</button>
          <button handleclick={handleChoco}>Chocolates</button>
        </div>
      </nav>
  )
}

export default NavBar;