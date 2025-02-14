import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Watch.module.css';

export default function Vow() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="watch1.png"
            alt="Wedding Magazines"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.writing}>
            <h1 className={styles.heading}>Realistic Watch Drawing</h1>
            <p  className={styles.subHeading}>TECHNICAL EXERCISE | GRAPHIC DESIGN | NOVEMBER 2023</p>
            <p className={styles.p}>This Rolex watch was a technical exercise assignment, with the goal of creating a realistic image of an appliance using vector art with Adobe Illustrator. Accuracy and attention to detail were vital to making this drawing look realistic, as well as the use of gradients and color swatches.</p>
          </div>
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
