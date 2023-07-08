import React, { useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { useRef } from 'react';
import styles from './Home.module.css';


const Home = () => {
    const trailer = useRef();
    const mainRef = useRef();
    // const trailer = document.getElementById('trailer');
    const wordOne = document.getElementById('word-1');
    const dimensions = {
        centerX : window.innerWidth / 2,
        centerY : window.innerHeight / 2,
    }

    const movement = {
        dx : 10,
        dy : 10
    }
    const changeStyleX = throttle(16,(x,y)=>{
        if(x < dimensions.centerX && y < dimensions.centerY ){
            mainRef.current.style.perspectiveOrigin = `${50 + movement.dx}% ${50 + movement.dy}%`;
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
        // const x = event.clientX - trailer.current.offsetWidth / 2,
        // y = event.clientY - trailer.current.offsetHeight / 2;
     

        // trailer.current.style.transform = `translate(${x}px, ${y}px)`
        // console.log(trailer.current.style.transform);

    };

    useEffect(()=>{
        handleMainMouseOver;
    },[]);

  return (
    <section className={styles.hero}>

        <main className={styles.main} id="main" onMouseOver={handleMainMouseOver} ref={mainRef}>
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
                <a href="" className={styles.btn}>
                    Hit me up
                </a>
            </header>
            {/* <span className={styles.trailer} ref={trailer}></span> */}
        </main>
    </section>
  )
}

export default Home;