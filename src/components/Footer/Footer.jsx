import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <footer id='footer' className={styles.footer}>
        
    </footer>
  )
}

export default Footer;