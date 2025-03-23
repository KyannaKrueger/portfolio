import Nav from "../components/molecules/Nav";
import styles from '../styles/Contact.module.css'
import Form from "@/components/molecules/Form.jsx";

export default function Contact() {
    return (
      <div>
        <Nav />
        <div className={styles.main}>
            <p className={styles.head}>Let’s create something amazing together! Drop me a message :) </p>
            <Form className={styles.form}/>
            <div className={styles.contactMethods}>
              <p className={styles.p}>kyannakrueger@gmail.com</p>
              <p className={styles.p}>LinkedIn: Kyanna Krueger</p>
              <a href="https://www.behance.net/kyannakrueger" className={styles.p}>Behance</a>
            </div>
        </div>
      </div>
    );
  }