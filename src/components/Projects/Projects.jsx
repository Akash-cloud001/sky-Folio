import React, { useEffect, useRef } from 'react'
import styles from './Projects.module.css';
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
              <img className={styles.image} src='https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' draggable='false'/>
              <p className={styles.desc}>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React Js </span>
                  <span>MUI</span>
                  <span>Firebase</span>
                </div>
                <div className={styles.about}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                </div>
                <a className={styles.btn}>
                  Visit Website
                </a>
              </p>
            </div>

            <div className={styles.project}>
            <img className={styles.image} src='https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'  draggable='false'/>
              <p className={styles.desc}>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React Js </span>
                  <span>MUI</span>
                </div>
                <div className={styles.about}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                </div>
                <a className={styles.btn}>
                  Visit Website
                </a>
              </p>
              
            </div>

            <div className={styles.project}>
              <img className={styles.image} src='https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' draggable='false' />

              <p className={styles.desc}>
                <div className={styles.tech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Js</span>
                  <span>Jquery</span>
                </div>
                <div className={styles.about}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                </div>
                <a className={styles.btn}>
                  Visit Website
                </a>
              </p>
            </div>
        </div>
    </section>
  )
}

export default Projects;