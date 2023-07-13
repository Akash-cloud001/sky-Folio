import React, { useState } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/svg/skyFolio.png';
const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <footer id='footer' className={styles.footer}>
        <div className={styles.contact}>
          <div className={styles.header}>
            <header>
              Contact
            </header>
            <div>
              Got a problem to solve?
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formDiv}>
              <label className={styles.label} htmlFor='name'>Name</label>
              <input 
              className={styles.input} 
              type='text' 
              id='name' 
              name='name' 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              />
            </div>


            <div className={styles.formDiv}>
              <label className={styles.label} htmlFor='email'>Email</label>
              <input 
              className={styles.input} 
              type='mail' 
              id='email' 
              name='mail' 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              />
            </div>


            <div className={styles.formDiv}>
              <label className={styles.label} htmlFor='message'>
                Message
              </label>
              <textarea 
              className={styles.textarea} 
              id='message'
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              >

              </textarea>
            </div>
            <button className={styles.btn} type='submit'>
              Hit Me Up
            </button>
          </form>
        </div>


        <div className={styles.social}>
            <div className={styles.logoBox}>
              <img alt='skyFolio website logo'  src={logo} />
            </div>
            <div className={styles.dialog}>
              Living, learning & leveling up <br/> one day at a time.
            </div>
            <ul className={styles.socialUl}>
              <li className={styles.socialLi}>
                <a href='https://twitter.com/parmarSKY_' target='_blank'>
                  <i class="ri-twitter-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='https://www.linkedin.com/in/akash-parmar-/' target='_blank'>
                  <i class="ri-linkedin-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='http://discordapp.com/users/558636559755247616' target='_blank'>
                  <i class="ri-discord-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='https://github.com/Akash-cloud001' target='_blank'>
                  <i class="ri-github-line"></i>
                </a>
                </li>
            </ul>
            <div className={styles.benchmark}>
              Handcrafted by me <i class="ri-copyright-line"></i> 2023
            </div>
        </div>
    </footer>
  )
}

export default Footer;