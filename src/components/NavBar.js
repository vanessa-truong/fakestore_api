import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
            <section className="section_header">
            <h1><span className="SM">S</span>uper<span className="SM">M</span>azon</h1>
        <nav className="navBar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Service</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        </section>
    );
}

export default NavBar;