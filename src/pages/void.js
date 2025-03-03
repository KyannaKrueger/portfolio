import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Void.module.css';

export default function Vow() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="voidBanner.png"
            alt="a video game poster"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Void Circuit</h1>
            <p  className={styles.subHeading}>VIDEO GAME POSTER | GRAPHIC DESIGN | DECEMBER 2024</p>
            <p className={styles.p}>This video game poster was created for a fictional video game called Void Citcuit. The poster features one of the video game characters, Nyxia, and gives potential players an idea of the futuristic world the game takes place in.</p>
          <img src="voidPoster1.png" className={styles.voidPoster}/>
          </div>
          <img src="voidPoster.png"
          alt="A Dior exhibition poster on a tablet"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
