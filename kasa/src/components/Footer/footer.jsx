import logo from '../../assets/kasa_logo.svg'

function Footer (){
    return(
        <footer className='main-footer'>
            <img className='main-logo main-logo--footer' src={logo} alt='Kasa Logo'/>
            <p className='main-footer__copyright'>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )

}

export default Footer