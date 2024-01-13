import logo from '../../assets/kasa_logo.svg'
import Nav from '../../components/Nav/nav';

function Header() {
  return (
    <header className="main-header">
      <img className='main-logo main-logo--header' src={logo} alt='Kasa Logo'/>
      <Nav />
    </header>
  )
}

export default Header