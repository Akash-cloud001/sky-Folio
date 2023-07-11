import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Aboutme from '../Aboutme/Aboutme';
import Navbar from '../Navbar/Navbar';
const Home = () => {

  return (
    <section className={styles.home}>
        <Navbar />
        <Hero />
        <Aboutme />
    </section>
  )
}

export default Home;