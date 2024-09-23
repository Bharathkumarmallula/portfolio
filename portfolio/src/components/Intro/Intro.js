import React from 'react';
import './Intro.css';
import { Link } from "react-scroll";
import btnImage from '../../assets/hireme.png'

export const Intro = () => {
  return (
        <section id="intro">
            <div className="introContent">
    <span className="hello">Hello</span>
    <span className="introText">I'm <span className="introName">Bharath</span><br/> Front-End Developer</span>
    <p className="introPara">I am skilled website developer with experience in creating the Responsive websites</p>
    <Link><button className="btn"><img src={btnImage} alt="" className="hireMeBtnImg" />Hire Me</button></Link>
            </div>
            <img src='' alt="" />
        </section>
    
  )
}
export default Intro
