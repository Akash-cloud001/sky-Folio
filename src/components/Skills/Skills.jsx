import React from 'react'
import styles from './Skills.module.css';
import html from '../../assets/images/html-1.svg';
import css from '../../assets/images/css-3.svg';
import js from '../../assets/images/logo-javascript.svg';
import reactjs from '../../assets/images/react-2.svg';
import git from '../../assets/images/git-icon.svg';
import figma from '../../assets/images/figma-1.svg';
import node from '../../assets/images/nodejs-icon.svg';
import tailwind from '../../assets/images/tailwindcss.svg';
import sass from '../../assets/images/sass-1.svg';


const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
        <div className={styles.header}>
            <h4>
              Skills
            </h4>
            <div>
              That I Possess
            </div>
        </div>
        <div className={styles.skillsName}>
            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={html} />
                </div>
                <p className={styles.skillabout}>
                    HTML
                </p>
            </div>
            <div className={styles.skillContent}>    
                <div className={styles.skill}>
                    <img src={css} />
                </div>
                <p className={styles.skillabout}>
                    CSS
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={js} />
                </div>
                <p className={styles.skillabout}>
                    JAVA SCRIPT
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={reactjs} /> 
                </div>
                <p className={styles.skillabout}>
                    react
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={git} />
                </div>
                <p className={styles.skillabout}>
                    git
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={figma} />
                </div>
                <p className={styles.skillabout}>
                    figma
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={node} />
                </div>
                <p className={styles.skillabout}>
                    Nodejs
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={sass} />
                </div>
                <p className={styles.skillabout}>
                    sass
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src={tailwind} />
                </div>
                <p className={styles.skillabout}>
                    tailwind
                </p>
            </div>
            
            
            
        </div>
    </section>
  )
}

export default Skills;