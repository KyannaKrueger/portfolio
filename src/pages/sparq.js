import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Sparq.module.css';

export default function Dior() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="sparqMockup2.png"
                alt="Cans of an alchoholic beverage in an ice bucket"
                className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Sparq & Sip</h1>
            <p  className={styles.subHeading}>ADVERTISEMENT | GRAPHIC DESIGN | NOVEMBER 2024</p>
            <p className={styles.p}>“Sparq & Sip” is a high-end sparkling sangria brand made for convenient sipping. Offering a variety of fruity flavors and premium wine blends, it’s designed for those who crave effortless indulgence. Every sip adds a sparkle to everyday moments or special occasions.</p>
            <p className={styles.p}>The can design was crafted to showcase each flavor with clarity while maintaining a clean and elegant aesthetic, evoking the same sophistication and indulgence as sipping from a wine glass.</p>
            <p className={styles.p}>The design draws inspiration from the timeless charm of traditional sangria and the settings where it’s enjoyed—patios on warm summer nights, gatherings with friends, and dreamy vacation escapes.</p>
          </div>
          <img src="sparqMockup1.1.png"
          alt="An alcholic can sitting on a patio table"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.inspo}>
          <h2 className={styles.heading}>Inspiration</h2>
          <div className={styles.inspoImgs}>
          <img src="sparqInspo4.jpg"
            className={styles.inspoImg}
          />
            <img src="sparqInspo1.jpg"
            className={styles.inspoImg}
          />
            <img src="sparqInspo5.jpg"
            className={styles.inspoImg}
          />
          </div>
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}