import styles from './Hero.module.css';
import React, { useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { useRef } from 'react';
import cv from '../../assets/images/Akash_Parmar_2024.pdf';

const Hero = () => {
    const mainRef = useRef();
    const torchRef =useRef();
    const dimensions = {
        centerX : window.innerWidth / 2,
        centerY : window.innerHeight / 2,
    }

    const movement = {
        dx : 3,
        dy : 3
    }
    const changeStyleX = throttle(16,(x,y)=>{
        if(x < dimensions.centerX && y < dimensions.centerY ){
            mainRef.current.style.perspectiveOrigin = `${50 + movement.dx}% ${50 + movement.dy}%`;
        }
        else{
            mainRef.current.style.perspectiveOrigin = `${50}% ${50}%`;

        }
        if(x > dimensions.centerX && y < dimensions.centerY){
            mainRef.current.style.perspectiveOrigin = `${50 - movement.dx}% ${50 + movement.dy}%`;

        }
        
        if(x < dimensions.centerX && y > dimensions.centerY ){
            mainRef.current.style.perspectiveOrigin = `${50 + movement.dx}% ${50 - movement.dy}%`;
        }
        
        if(x > dimensions.centerX && y > dimensions.centerY){
            mainRef.current.style.perspectiveOrigin = `${50 - movement.dx}% ${50 - movement.dy}%`;
        }
    
    });
    

    const handleMainMouseOver = (event)=>{
        changeStyleX(event.clientX, event.clientY);
    };

    useEffect(()=>{
        handleMainMouseOver;
    },[]);
  return (
    <main className={styles.main} id="main" onMouseOver={handleMainMouseOver} onTouchStart={handleMainMouseOver} ref={mainRef}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.blur}>
        </div>
        <header className={styles.header}>
            <div className={styles.word1} id="word-1">
                Crafting
            </div>
            <span>
            the future of web<br/>
            Interaction
            </span>
            <a href={cv} className={styles.btn} target='_blank' >
                Resume
            </a>
        </header>
    </main> 
  )
}

export default Hero