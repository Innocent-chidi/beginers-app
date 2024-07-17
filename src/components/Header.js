import { useState } from "react";
import "../css/Header.css"
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../images/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  const [bars, setBars] = useState(true)

  const handleMobileChange = () => {
    setBars(!bars)
  }

  return (
    <div className="Header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="mobile-icon" onClick={handleMobileChange}>
        {bars ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={bars ? 'nav-menu' : 'nav-menu show'}>
        <li><Link to="/" className="nav-item" onClick={handleMobileChange}>Home</Link></li>
        <li><Link to="about" className="nav-item" onClick={handleMobileChange}>About</Link></li>
        <li><Link to="contact" className="nav-item" onClick={handleMobileChange}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header