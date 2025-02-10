import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Sparq.module.css';

export default function Sparq() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="sparqMockup2.2.png"
                alt="Cans of an alchoholic on an orange background"
                className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Sparq & Sip</h1>
            <p  className={styles.subHeading}>BRANDING | GRAPHIC DESIGN | NOVEMBER 2024</p>
            <p className={styles.p}>“Sparq & Sip” is a high-end sparkling sangria brand made for convenient sipping. Offering a variety of fruity flavors and premium wine blends, it’s designed for those who crave effortless indulgence. Every  sip adds a sparkle to everyday moments or special occasions.</p>
            <p className={styles.p}>The can design was crafted to showcase each flavor with clarity by clearly displaying the fruit flavors while maintaining a clean and elegant aesthetic, evoking the same indulgence as sipping from a wine glass.</p>
            <p className={styles.p}>Consumers expectations are set by the clear display of fruit flavors on the front of the can, reducing confusion, while the dots representing bubbles, draw the attention towards the center of the can.</p>
          </div>
          <img src="sparqMockup1.2.png"
          alt="An alcholic can with fruits and water splashing"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.dielines}>
          <h2 className={styles.h2}>Dielines</h2>
          <div className={styles.canDies}>
            <img src="can1.png"
            alt="An alcholic can sitting on a patio table"
            className={styles.dieline}
            /><img src="can2.png"
            alt="An alcholic can sitting on a patio table"
            className={styles.dieline}
            /><img src="can3.png"
            alt="An alcholic can sitting on a patio table"
            className={styles.dieline}
            />
          </div>
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