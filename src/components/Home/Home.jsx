import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Aboutme from '../Aboutme/Aboutme';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
const Home = () => {
  const [children, setChildren] = useState([]);
  const homeRef = useRef({
    background : '',
  })

  useEffect(()=>{
    const onScroll = (event)=>{

      const childArr = event?.target.children[0].children[1].children[0].children[0].children;
      const temp  = [];
      for(let i=0 ; i<childArr.length; i++){
           temp.push({
          clientHeight : childArr[i].clientHeight,
           clientWidth : childArr[i].clientWidth, 
           offsetHeight : childArr[i].offsetHeight, 
           offsetWidth : childArr[i].offsetWidth
          });
      }
      setChildren(temp);
      // to set Nav Background
      if(window.scrollY >= (temp[1].clientHeight )){
        homeRef.current.background = 'rgba(0,0,0,0.5)';
      }else{
        homeRef.current.background = 'transparent';
      }

    };

    window.addEventListener('scroll', onScroll, {passive: true});

    return()=>{
      window.removeEventListener('scroll', onScroll)
    }
  },[]);

  return (
    <section className={styles.home} ref={homeRef}>
        <Navbar 
          color = {homeRef.current.background} 
        />
        <Hero />
        <Aboutme />
        <Skills />
        <Projects />
        <Footer />
    </section>
  )
}

export default Home;