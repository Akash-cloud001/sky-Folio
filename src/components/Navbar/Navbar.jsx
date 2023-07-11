import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const { color, isAbout, isProject, isContact } = props;
  const style = {
    background : color,
    transition : 'background 250ms ease-in-out'
  }
  return (
    <nav className={styles.nav} style={style}>
      <div className={styles.brandName}>
          <span>SKY</span><span>FOLIO</span>
      </div>
      <ul className={styles.navUl}>
        <li className={`${styles.navLi} ${isAbout?styles.liAnim:''}`}>
            About
        </li>
        <li className={`${styles.navLi} ${isProject?styles.liAnim:''}`}>
            Projects
        </li>
        <li className={`${styles.navLi} ${isContact?styles.liAnim:''}`}>
            Hit me up
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;