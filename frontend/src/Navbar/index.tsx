import './styles.css'

import {ReactComponent as Logo} from'./logo.svg'
function Navbar() {
  return (
    <nav className='main-navbar'>
        <Logo/>
        <img src="/src/Home/img/deliv3.png" alt="" />

        <a className='logo-text' href="home">ACHA Delivery</a>
      
    </nav>
  )
}

export default Navbar
