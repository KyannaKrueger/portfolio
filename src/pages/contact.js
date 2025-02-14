import Nav from "../components/molecules/Nav";
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
      <div>
        <Nav />
        <div className={styles.main}>
            <p className={styles.head}>Let’s create something amazing together! Drop me a message :) </p>
            <p className={styles.p}>kyannakrueger@gmail.com</p>
            <a href="www.linkedin.com/in/kyannakrueger">LinkedIn</a>
            <a href="https://www.behance.net/kyannakrueger">Behance</a>
            {/* <div className={styles.formSection}>
              <form action="/submit" className={styles.form}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email Adress:</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit" className={styles.submit}>Submit</button>
              </form>
            </div> */}
        </div>
      </div>
    );
  }