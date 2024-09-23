import React, { useState } from "react";
import logo from "../../assets/my-logo.png";
import { Link } from "react-scroll";
import './Navibar.css';
import contactImage from '../../assets/contact.png';
import menuImg from '../../assets/menu.png';

export const Navibar = () => {
  const contactRef= document.getElementById('contactPage');
  const [showMenu,setShowMenu]= useState(false);
  return (
   
      <nav className="navibar">
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="desktopMenu">
        <Link className="desktopMenuListItems" activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className="desktopMenuListItems" activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        <Link className="desktopMenuListItems" activeClass="active" to='works' spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link>
        <Link className="desktopMenuListItems" activeClass="active" to='clients' spy={true} smooth={true} offset={-90} duration={500}>Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          contactRef.scrollIntoView({ behavior: "smooth" });
        }}>
          <img src={contactImage} className="desktopMenuImg" />
           Contact me
        </button>
        <img src={menuImg} alt="Menu" className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}} />
        <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link className="listItems" activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{setShowMenu(false)}} >Home</Link>
        <Link className="listItems" activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500}onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link className="listItems" activeClass="active" to='works' spy={true} smooth={true} offset={-80} duration={500} onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
        <Link className="listItems" activeClass="active" to='clients' spy={true} smooth={true} offset={-90} duration={500} onClick={()=>{setShowMenu(false)}}>Clients</Link>
        <Link className="listItems" activeClass="active" to='contactPage' spy={true} smooth={true} offset={-10} duration={500} onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div>
      </nav>
   
  );
};
