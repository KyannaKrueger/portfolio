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
                  I'm currently a second-year student at BCIT, working toward a diploma in Digital Design and Development. I'm passionate about creating designs that are not only visually engaging but also accessible and intuitive for all users. I believe that design has the power to shape positive experiences, and my goal is to make sure those experiences are inclusive for everyone.
              </p>
              <p className={styles.p}>
                  In addition to my studies, my experience as a taekwondo instructor has been instrumental in shaping my approach to both personal and professional growth. Teaching taekwondo has helped me develop essential qualities like self-discipline, determination, and respect—skills that I always make sure to apply to my work, ensuring that I stay focused, motivated, and mindful of others.
              </p>
              <p className={styles.p}>
                  I’m excited about building a career in design where I can combine my technical knowledge and passion to create impactful digital solutions. I’m always open to connecting with others who share similar interests or who are working on exciting projects, and I look forward to future opportunities to learn, collaborate, and grow.📫💫
              </p>
            </div>
            <div className={styles.pfp}>
              <img src="pfp.png" alt="Profile Picture" />
            </div>
            </div>
      </div>
    );
  }