import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = (props) => {
  const { color } = props;
  const [hamburger, setHamburger] = useState(false)
  const style = {
    background : color,
    transition : 'background 250ms ease-in-out'
  }
  const handleHamburger = (e)=>{
    setHamburger(!hamburger)
  }
  const handleRedirectCloseHamburger = ()=>{
    setHamburger(false)
  }
  return (
    <nav className={styles.nav} style={style}>
      <div className={styles.brandName} onClick={handleRedirectCloseHamburger}>
        <Link
        to='main' 
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={handleRedirectCloseHamburger}
        >
          <span>SKY</span><span>FOLIO</span>
        </Link>
      </div>
      <button className={styles.hamburger} onClick={handleHamburger}>
        <span className={`${styles.line1} ${hamburger?styles.show1:''}`}></span>
        <span className={`${styles.line2} ${hamburger?styles.show2:''}`}></span>
        <span className={`${styles.line3} ${hamburger?styles.show3:''}`}></span>
      </button>
      <ul className={`${styles.navUl} ${hamburger?styles.show:''}`} style={hamburger?style:null}>
        <li className={`${styles.navLi}`}  onClick={handleRedirectCloseHamburger}>
            <Link 
            to='about' 
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleRedirectCloseHamburger}
            >
              About
            </Link>
        </li>
        <li className={`${styles.navLi}`}  onClick={handleRedirectCloseHamburger}>
            <Link 
            to='skills' 
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleRedirectCloseHamburger}
            > 
              Skills
            </Link>
        </li>
        <li className={`${styles.navLi}`} onClick={handleRedirectCloseHamburger}>
            <a href='#projects'>
              Projects
            </a>
        </li>
        <li className={`${styles.navLi}`} onClick={handleRedirectCloseHamburger}>
            <a  href='#contact'>
              Hit Me Up
            </a>
        </li>
      </ul>
      <div className={`${styles.wrapper} ${hamburger?styles.wrapperShow:''}`} onClick={handleHamburger}></div>
    </nav>
  )
}

export default Navbar;