import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Aboutme from '../Aboutme/Aboutme';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  const [children, setChildren] = useState([]);
  const homeRef = useRef({
    background : '',
    about : false,
    project : false,
    contactMe : false
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
      if(window.scrollY >= (temp[0].clientHeight * 3)){
        homeRef.current.background = 'rgba(0,0,0,0.5)';
      }else{
        homeRef.current.background = 'transparent';
      }

      //to active navLinks as per the scroll
      let gaps = [temp[1].clientHeight - 20, temp[1].clientHeight + temp[2].clientHeight - 20];
      if(window.scrollY > gaps[0] && window.scrollY < gaps[1]){
        homeRef.current.about = true;
      }else{
        homeRef.current.about = false;
      }
      
    };

    window.addEventListener('scroll', onScroll, {passive: true});

    return()=>{
      window.removeEventListener('scroll', onScroll)
    }
  });

  return (
    <section className={styles.home} ref={homeRef}>
        <Navbar 
        color = {homeRef.current.background} 
        isAbout = {homeRef.current.about}
        isProject = {homeRef.current.project}
        isContact = {homeRef.current.contactMe}
        />
        <Hero />
        <Aboutme />
    </section>
  )
}

export default Home;