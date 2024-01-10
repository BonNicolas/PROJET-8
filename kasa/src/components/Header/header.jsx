import { Link } from "react-router-dom"
import logo from '../../assets/kasa_logo.svg'

function Header() {
  return (
    <header className="main-header">
      <img className='main-logo--header' src={logo} alt='Kasa Logo'/>
    <nav>
      <Link className="main-header__home" to="/">Accueil</Link>
      <Link to="/About">A Propos</Link>
    </nav>
    </header>
  )
}

export default Header