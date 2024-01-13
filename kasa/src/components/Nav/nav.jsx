import { Link } from "react-router-dom"


function Nav() {
    return(
        <nav>
            <Link className="main-header__home cta cta--header" to="/">Accueil</Link>
            <Link className="cta cta--header" to="/About">A Propos</Link>
        </nav>
    )
}

export default Nav

 