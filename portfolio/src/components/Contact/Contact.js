import React, { useRef } from 'react';
import './Contact.css';
import instragramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qw1mydr', 'template_tsmnexj', form.current,{
            publicKey: 'y8g8NPggQzS3ahDeS',
          })
          .then((result) => {
              console.log("result.text", result.text);
              alert('Email Sent')
              e.target.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
   <section id='contactPage'>
    <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
            Client Description
        </p>
    </div>
    <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities</span>
        <form ref={form} action="" onSubmit={sendEmail} className="contactForm">
            <input type="text" className="name" placeholder='Your name' name='your_name' />
            <input type="email" className="email" placeholder='Your email' name='from_mail'/>
            <textarea id="" className="msg"placeholder='Your message' name='message'></textarea>
            <button type='submit' className="submitBtn">Submit</button>
        </form>
        <div className="links">
            <img src={instragramIcon} alt="" className="link" />
            <img src={twitterIcon} alt="" className="link" />
            <img src={youtubeIcon} alt="" className="link" />
          
            
        </div>
    </div>

   </section>
  )
}
export default Contact;