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
            <p className={styles.p}>kyannakrueger@gmail.com</p>
            <a href="www.linkedin.com/in/kyannakrueger">LinkedIn</a>
            <a href="https://www.behance.net/kyannakrueger">Behance</a>
        </div>
      </div>
    );
  }