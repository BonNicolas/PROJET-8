import logo from '../../assets/kasa_logo.svg'

function Footer() {
  return (
    <footer className="main-footer">
      <img className="main-logo main-logo--footer" src={logo} alt="Kasa Logo" />
      <div className="main-footer__copyright">
        <span>&copy; 2020 Kasa. All </span>
        <span>rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
