import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(false)
  const { color, isAbout, isProject, isContact } = props;
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
      <div className={styles.brandName}>
          <span>SKY</span><span>FOLIO</span>
      </div>
      <button className={styles.hamburger} onClick={handleHamburger}>
        <span className={`${styles.line1} ${hamburger?styles.show1:''}`}></span>
        <span className={`${styles.line2} ${hamburger?styles.show2:''}`}></span>
        <span className={`${styles.line3} ${hamburger?styles.show3:''}`}></span>
      </button>
      <ul className={`${styles.navUl} ${hamburger?styles.show:''}`} style={hamburger?style:null}>
        <li className={`${styles.navLi} ${isAbout?styles.liAnim:''}`}  onClick={handleRedirectCloseHamburger}>
            <a  href='#about'>
              About
            </a>
        </li>
        <li className={`${styles.navLi} ${isProject?styles.liAnim:''}`} onClick={handleRedirectCloseHamburger}>
            Projects
        </li>
        <li className={`${styles.navLi} ${isContact?styles.liAnim:''}`} onClick={handleRedirectCloseHamburger}>
            Hit me up
        </li>
      </ul>
      <div className={`${styles.wrapper} ${hamburger?styles.wrapperShow:''}`} onClick={handleHamburger}></div>
    </nav>
  )
}

export default Navbar;