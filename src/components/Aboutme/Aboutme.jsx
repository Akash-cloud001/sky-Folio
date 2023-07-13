import styles from './Aboutme.module.css';
import React, { useEffect, useRef } from 'react';

const Aboutme = () => {
    const torchRef =useRef();
    const handleTorchMove = (event)=>{
        const torchEvent = torchRef.current;
        let left = event.clientX;
        let top = event.clientY;
        // setTimeout(()=>{
            torchEvent.style.left = left + 'px';
            torchEvent.style.top = top + 'px';
        // }, 200);
    }

    useEffect(()=>{
        handleTorchMove;
    },[]);
  return (
    <div className={styles.aboutContainer} onMouseMove={handleTorchMove} id='about'>
        <span className={styles.torch} ref={torchRef}> </span>

        <aside className={styles.aboutme}>
            <p className={styles.mep1}>
                Hi,<br />
                I'm <span>Akash</span><br/>
                    Frontend <span>Developer</span>
            </p>
            <p className={styles.meintro}>
            Transform your visions into reality, solve problems, and witness pixel-perfect masterpieces with me.
            </p>
        </aside>
        <aside className={styles.aboutImg}>
            <div>

            </div>
        </aside>
    </div>
  )
}

export default Aboutme;