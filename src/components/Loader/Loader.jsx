import React from 'react'
import logo from '../../assets/images/skyFolio.svg';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.container}>
            <img src={logo} />
        </div>
    </div>
  )
}

export default Loader;