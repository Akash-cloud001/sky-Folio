import React from 'react'
import styles from './Skills.module.css';

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
                    <img src='src/assets/svg/html-1.svg' />
                </div>
                <p className={styles.skillabout}>
                    HTML
                </p>
            </div>
            <div className={styles.skillContent}>    
                <div className={styles.skill}>
                    <img src='src/assets/svg/css-3.svg' />
                </div>
                <p className={styles.skillabout}>
                    CSS
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src='src/assets/svg/logo-javascript.svg' />
                </div>
                <p className={styles.skillabout}>
                    JAVA SCRIPT
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src='src/assets/svg/react-2.svg' /> 
                </div>
                <p className={styles.skillabout}>
                    react
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src='src/assets/svg/git-icon.svg' />
                </div>
                <p className={styles.skillabout}>
                    git
                </p>
            </div>

            <div className={styles.skillContent}>
                <div className={styles.skill}>
                    <img src='src/assets/svg/figma-1.svg' />
                </div>
                <p className={styles.skillabout}>
                    figma
                </p>
            </div>

            
            
            
            
        </div>
    </section>
  )
}

export default Skills;