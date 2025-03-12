import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Fit.module.css';

export default function Fit() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="fitQuest2.1.png"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>FitQuest</h1>
            <p  className={styles.subHeading}>FITNESS APP | UI/UX | JANUARY - MAY 2024</p>
            <p className={styles.p}>FitQuest is an innovative web application designed to make at-home fitness more accessible and engaging. </p>
            <p className={styles.p}> Beyond workouts, FitQuest offers a variety of health and nutrition articles to support a well-rounded fitness journey. Designed with young people and remote workers in mind, FitQuest helps busy individuals prioritize their health without leaving home.</p>
            <p className={styles.p}>A standout feature of FitQuest is its built-in language translation, enabling seamless switching between English and Chinese for a more inclusive experience.</p>
            <p className={styles.p}>FitQuest aims to inspire healthier lifestyles by offering personalized resources and empowering individuals to stay active on their own terms.</p>
          </div>
          <img src="fitQuest3.png"
          alt="A Dior exhibition poster on a tablet"
          className={styles.tabletImage}
          />
        </div>
        <div className={styles.inspo}>
          <h2 className={styles.heading}>Wireframes</h2>
          <iframe className={styles.figma} src="https://embed.figma.com/design/m4zSVwt850k88mEZLTOQtd/MDIA-2106-%E2%80%93-FitQuest-SET-G?node-id=3145-24551&embed-host=share" allowfullscreen></iframe>
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
