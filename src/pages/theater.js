import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Theater.module.css';

export default function Theater() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className="video-wrapper">
            <video src="/Kyanna_Final_Comp.mp4" 
            className={styles.video} 
            controls 
            poster="motion4.png"/>
          </div>
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Theater Etiquette</h1>
            <p  className={styles.subHeading}>VIDEO | MOTION GRAPHIC | APRIL 2024</p>
            <p className={styles.p}>"Theater Etiquette" is an educational video made to inform live-action theater audiences about how to behave. This video was inspired by the PSA videos on movie theater etiquette usually shown before movies.</p>
            <h2 className={styles.heading}>Character Designs</h2>
            <p className={styles.p}>The characters in the video were specifically designed to enhance the experience of the video. The simplicity of the character design helps them stand out against the detailed backgrounds, while the diversity in character appearances creates a realistic and inclusive environment.</p>
          </div>
          <img src="motion2.3.png"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.inspo}>
          <img src="motion1.1.png"
            className={styles.inspoImg}
          />
          <h2 className={styles.heading}>Backgrounds</h2>
          <p className={styles.p2}>Backgrounds were carefully designed with many details to evoke a sense of excitement, realism and aesthetics. </p>
          <div className={styles.inspoImgs}>
          <img src="motion3.png"
            className={styles.inspoImage}
          />
            <img src="motion4.png"
            className={styles.inspoImage}
          />
            <img src="motion5.png"
            className={styles.inspoImage}
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