import './Skills.css';
import React from 'react';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';


export const Skills = () => {
  return (
  <section id="skills">
    <span className="skillTitle">What I Do</span>
    <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS,and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
    <div className="skillBars">
    <img src={webDesign} alt="" className="skillBarImg" />
        <div className="skillBartext">
            <h2>Website development </h2>
            <p>Building the reactive & responsive websites</p>
        </div>
        </div>
        <div className="skillBars">
        <img src={appDesign} alt="" className="skillBarImg" />
        <div className="skillBartext">
            <h2>App development </h2>
            <p>Building the fast-responsive web applications</p>
        </div>
    </div>
  </section>
  )
}
export default Skills

