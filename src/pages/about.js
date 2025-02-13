import Nav from "../components/molecules/Nav";
import styles from '../styles/About.module.css'

export default function About() {
    return (
      <div>
        <Nav />
        <div className={styles.main}>
            <div className={styles.description}>
              <h1 className={styles.head}>Hi, I'm Kyanna!</h1>
              <p className={styles.p}>
                I'm passionate about creating designs that are not only visually engaging but also accessible and intuitive for all users. I believe that design has the power to shape positive experiences, and my goal is to make sure those experiences are inclusive for everyone.
              </p>
              <p className={styles.p}>
                I’m always open to connecting with others who share similar interests or who are working on exciting projects, and I look forward to future opportunities to learn, collaborate, and grow.
              </p>
              <a href="https://www.kyanna.ca/contact" className={styles.cta}>Contact Me!</a>
            </div>
            <div className={styles.pfp}>
              <img src="pfp.png" alt="Profile Picture" />
            </div>
            </div>
      </div>
    );
  }