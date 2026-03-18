import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Dior.module.css';

export default function Pomo() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="Program guide mockup.png"
            alt=" An arts program guide"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>PoMoArts</h1>
            <p  className={styles.subHeading}>PROMOTIONS | GRAPHIC DESIGN | SUMMER 2025</p>
            <p className={styles.p}>PoMoArts is a Not-for-profit arts centre, offering exhibitions, classes, community events, and more. They offer a diverse set of art opportunities for all ages, and support local artists.</p>
            <p className={styles.p}>During my time as a marketing assistant, I had the pleassure of creating and promoting program guides, creating social media content, and promoting the first ever annual "Art Out Side Festival", celebrating art of all kinds in spaces around Port Moody.</p>
            <p className={styles.p}>I really valued the opportunities this experience has given me to be able to combine my graphic design skills with marketing strategies while giving back to my community.</p>
            <p>*Please note that this webpage is under construction. I'm excited to share more work from this project soon!</p>
          </div>
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
