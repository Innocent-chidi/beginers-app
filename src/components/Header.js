import { useState } from "react";
import "../css/Header.css"
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../images/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  const [bars, setBars] = useState(true)
  const [mobileState, setMobileState] = useState(false)

  let barsDisplay = bars ? <FaBars /> : <FaTimes />

  const handleMobileChange = () => {
    setBars(!bars)
  }

  return (
    <div className="Header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="mobile-icon" onClick={handleMobileChange}>
        {barsDisplay}
      </div>
      <ul className="nav-menu">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="about" className="nav-item">About</Link></li>
        <li><Link to="contact" className="nav-item">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header