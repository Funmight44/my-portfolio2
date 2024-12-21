import { useState } from "react";
import logo from  "../BG-img/logo.png"
import { Link } from "react-router-dom";


const Header = () => {
     const [show, setShow] = useState(false)


    return ( 
     <>
        <header>
           <img src={logo} alt="logo" className="logo"/>
           <nav>
                <Link to="#home"><p>Home</p></Link>
                <a href="#skills"><p>Skills</p></a>
                <a href="#services"><p>Services</p></a>
                <a href="#projects"><p>Projects</p></a>
           </nav>
                <a href="#contact" className="contact-btn">Contact me</a>
                <p className="menubar"  onClick={() => setShow(!show)}> <i class="bi bi-list"></i></p>
        </header>

          <nav className={`sidebar ${show ? "showmenu" : ''}`}  onClick={() => setShow(false)}>
                <Link to="#home"><p>Home</p></Link>
                <a href="#skills"><p>Skills</p></a>
                <a href="#services"><p>Services</p></a>
                <a href="#projects"><p>Projects</p></a>
           </nav>
     </>
     );
}
 
export default Header;