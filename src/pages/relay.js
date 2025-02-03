import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Relay.module.css';

export default function Relay() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className={styles.intro}>
            <div className={styles.introLeft}>
                <h1  className={styles.heading}>Relay</h1>
                <p className={styles.subHeading}>APP | RESEARCHER & UI/UX DESIGNER | SEPTEMBER 2024 - DECEMBER 2024</p>
                <p  className={styles.introP}>Relay is Canada’s first ridesharing app for parents, designed to make it 
                easy to arrange safe, reliable transportation for your children. Whether you’re a busy parent juggling 
                a hectic schedule or a new immigrant seeking to expand your network, Relay connects you with trusted 
                families in your community—no random drivers.</p>
                <button className={styles.blogbtn}>
                    Visit Blog
                </button>
                <h2 className={styles.h2}>Table of Contents</h2>
                <p className={styles.introP}> Click on a number to jump to that section!</p>
                <div className={styles.toc}>
                    <p className={styles.num}>01</p>
                    <p className={styles.tocP}>The Market Gap</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>02</p>
                    <p className={styles.tocP}>User Persona’s</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>03</p>
                    <p className={styles.tocP}>How Relay can Help</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>04</p>
                    <p className={styles.tocP}>Wire Frames</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>05</p>
                    <p className={styles.tocP}>Branding</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>06</p>
                    <p className={styles.tocP}>Promotional Video</p>
                </div>
            </div>
            <img src="relay1.png"
            className={styles.introImg}
            />
        </div>

      <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}