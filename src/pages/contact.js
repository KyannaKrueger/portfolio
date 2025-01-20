import Nav from "../components/molecules/Nav";
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
      <div>
        <Nav />
        <div className={styles.main}>
            <h1 className={styles.head}>Let's get in touch!</h1>
            <p className={styles.p}>kyannakrueger@gmail.com</p>
            <a href="www.linkedin.com/in/kyannakrueger">LinkedIn</a>
        </div>
      </div>
    );
  }