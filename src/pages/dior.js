import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Dior.module.css';

export default function Dior() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className={styles.diorHead}>
          <h1 className={styles.heading}>Dior Through the Decades</h1>
          <p  className={styles.subHeading}>ADVERTISEMENT | GRAPHIC DESIGN | SEPTEMBER 2024</p>
        </div>
        <div className={styles.diorBod}>
          <img src="Dior 1920x1080.png"
          alt="A Dior exhibition poster at a bus stop"
          className={styles.image}
          />
          <p className={styles.p}>"Dior Through the Decades" is an advertisement for a fictional museum, promoting an exhibit that celebrates the rich history of the Dior brand. The showcase highlights the fashion house’s groundbreaking designs, tracing its journey from 1460 to its lasting impact on haute couture.</p>
          <img src="Dior tablet.png"
          alt="A Dior exhibition poster at a bus stop"
          className={styles.tabletImage}
          />
          <p className={styles.p}>The advertisement was designed for two display formats: posters and digital tablets. While each is optimized for its respective dimensions, both feature Dior's iconic 1949 Junon dress, ensuring a visually striking representation of the brand's timeless elegance.</p>
          <img src="Dior inspo.png"
          alt="A Dior exhibition poster at a bus stop"
          className={styles.image}
          />
          <p className={styles.p}>Additional design elements, such as typography and color palette, were carefully chosen to evoke a sense of sophistication, aligning with Dior's reputation for luxury and innovation.</p>
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
