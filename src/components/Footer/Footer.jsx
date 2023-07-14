import React, { useState } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/svg/skyFolio.png';
import emailjs from 'emailjs-com'


const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState("");
    const errorTimingFun = (e)=>{
      setTimeout(()=>{setError('')}, 1500);
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      if(name === '' || /[0-9]/.test(name)){
        setError('Please Enter valid name');
        setName('');
        errorTimingFun();
        return;
      }

      const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;


      if(email === '' || !email.match(mailFormat)){
        setError('Please Enter valid email');
        setEmail('');
        errorTimingFun();
        return;
      }

      if(message === ''){
        setError('Enter a message');
        errorTimingFun();
        return;
      }

      console.log('name : ', name)
      console.log('email : ', email)
      console.log('message : ', message)

      emailjs.sendForm('service_36ia3fx', 'template_tnfslyn', e.target, 'V8PkcoBQ2MaaWslG3')
      .then((result) => {
          setSuccess("I'll get back at you soon");
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(()=>{
            setSuccess('');
          },2000);
          
      }, (error) => {
          setError("Error in sending, use other social handles");
          setName('');
          setEmail('');
          setMessage('');
          errorTimingFun();
      });

    }
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
          <form className={styles.form} onSubmit={handleSubmit}>
            {
              error === ''? null : 
              <p className={styles.error}>
                <i className="ri-error-warning-line"></i> &nbsp;{error}
              </p>
            }
            {
              success === ''? null : 
              <p className={styles.success}>
                <i className="ri-mail-send-line"></i> &nbsp;{success}
              </p>
            }
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
              name='email' 
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
              name='message'
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
                  <i className="ri-twitter-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='https://www.linkedin.com/in/akash-parmar-/' target='_blank'>
                  <i className="ri-linkedin-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='http://discordapp.com/users/558636559755247616' target='_blank'>
                  <i className="ri-discord-line"></i>
                </a>
                </li>
              <li className={styles.socialLi}>
                <a href='https://github.com/Akash-cloud001' target='_blank'>
                  <i className="ri-github-line"></i>
                </a>
                </li>
            </ul>
            <div className={styles.benchmark}>
              Handcrafted by me <i className="ri-copyright-line"></i> 2023
            </div>
        </div>
    </footer>
  )
}

export default Footer;