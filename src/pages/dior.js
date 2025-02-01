import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Dior.module.css';

export default function Dior() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="Dior 1920x1080.png"
            alt="A Dior exhibition poster at a bus stop"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Dior Through the Decades</h1>
            <p  className={styles.subHeading}>ADVERTISEMENT | GRAPHIC DESIGN | SEPTEMBER 2024</p>
            <p className={styles.p}>"Dior Through the Decades" is an advertisement for a museum, promoting an exhibit that celebrates the rich history of the Dior brand. The showcase highlights the fashion house’s groundbreaking designs, tracing its journey from 1946 to its lasting impact on haute couture.</p>
            <p className={styles.p}>The advertisement was designed for two display formats: posters and digital tablets. While each is optimized for its respective dimensions, both feature Dior's iconic 1949 Junon dress, ensuring a visually striking representation of the brand's timeless elegance.</p>
            <p className={styles.p}>Additional design elements, such as the sophisticated typography and dark color palette, were carefully chosen to evoke a sense of sophistication, aligning with Dior's reputation for luxury and innovation, and to help the main focus (the dress) stand out.</p>
          </div>
          <img src="Dior tablet.png"
          alt="A Dior exhibition poster on a tablet"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.inspo}>
          <h2 className={styles.heading}>Inspiration</h2>
          <div className={styles.inspoImgs}>
          <img src="diorInspo1.jpeg"
            className={styles.inspoImg}
          />
            <img src="diorInspo2.jpeg"
            className={styles.inspoImg}
          />
            <img src="diorInspo3.jpg"
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
