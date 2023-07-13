import React, { useEffect, useRef } from 'react'
import styles from './Projects.module.css';
import eStore from '../../assets/images/E-s.png';
import colorPalette from '../../assets/images/colorPalette.png';
import himalayan from '../../assets/images/H.png';
const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
        <header className={styles.header}>
            <h4>My Work</h4>
            <div>
                Dig into my world
            </div>
        </header>
        <div className={styles.wrapper} >
            <div className={styles.project}>
              <img className={styles.image} src={eStore} draggable='false'/>
              <p className={styles.desc}>
                <header className={styles.name}>E-Store</header>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React Js </span>
                  <span>MUI</span>
                  <span>Firebase</span>
                </div>
                <div className={styles.about}>
                E-store is a React-based app developed with Firebase and Material UI. It offers an intuitive online shopping experience, featuring a sleek and responsive user interface. E-store leverages Firebase for real-time data synchronization, user authentication, and secure data storage. Material UI enhances the visual appeal and provides a consistent design language.
                </div>
                <a href='https://e-store-14732.web.app/' target='_blank' className={styles.btn}>
                  Visit Website
                </a>
              </p>
            </div>
            
            <div className={styles.project}>
            <img className={styles.image} src={colorPalette}  draggable='false'/>
              <p className={styles.desc}>
                <header className={styles.name}>Color Palette Generator</header>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React Js </span>
                  <span>MUI</span>
                </div>
                <div className={styles.about}>
                Color Palette Generator is a React app built with Material UI, enabling users to generate beautiful color palettes. With an intuitive interface, users can explore a wide range of color combinations and export them for use in design projects. Material UI ensures a visually appealing and user-friendly experience.
                </div>
                <a href='https://color-palette-bf69a.web.app/' target='_blank' className={styles.btn}>
                  Visit Website
                </a>
              </p>
              
            </div>

            <div className={styles.project}>
              <img className={styles.image} src={himalayan} draggable='false' />

              <p className={styles.desc}>
                <header className={styles.name}>Himalayan Tribe</header>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Js</span>
                  <span>Jquery</span>
                </div>
                <div className={styles.about}>
                Himalayan Tribe is a responsive multi-page frontend website designed for booking tourism packages and rides in the Himalayan region. Created using HTML, CSS, and JavaScript, the website provides an immersive user experience with a visually appealing design. Users can easily browse and book various tourism packages and rides.
                </div>
                <a href='https://himalayantribefrontend.web.app/' target='_blank' className={styles.btn}>
                  Visit Website
                </a>
              </p>
            </div>
        </div>
    </section>
  )
}

export default Projects;