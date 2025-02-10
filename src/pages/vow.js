import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Vow.module.css';

export default function Vow() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="VOW.1.png"
            alt="Wedding Magazines"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>VOW Magazine</h1>
            <p  className={styles.subHeading}>MAGAZINE | GRAPHIC DESIGN | JANUARY 2025</p>
            <p className={styles.p}>VOW is a chic and elegant wedding magazine that celebrates the artistry and innovation of the bridal world. From spotlighting the latest wedding dress designers to unveiling emerging trends, VOW is where timeless romance meets contemporary style. A source of inspiration for modern brides seeking to craft their dream wedding.</p>
            <p className={styles.p}>The magazine covers are designed with brides in mind, aiming to inspire and excite readers as they plan their big day. The elegant typography complements the romantic theme, exuding sophistication and timeless charm, while the darkened edges allow the beautiful white gowns to stand out. </p>
          </div>
        </div>
        <div className={styles.inspo}>
          <h2 className={styles.heading}>Magazine Covers</h2>
          <div className={styles.inspoImgs}>
            <img src="Wedding mag 1.png"
              className={styles.inspoImg}
            />
            <img src="Wedding mag 2.1.png"
              className={styles.inspoImg}
            />
              <img src="Wedding mag 3.png"
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
