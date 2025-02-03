import { useState } from "react";
import Link from "next/link"; 
import Nav from '../components/molecules/Nav';
import styles from '../styles/Index.module.css';
import { Playfair_Display } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Nunito } from 'next/font/google';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("graphicDesign");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.head}>Welcome to My Portfolio</h1>
          <p className={styles.p}>This site is currently under construction. I am adding projects as you read!<br/>
          Come back soon and check out my behance portfolio for now!</p>
          <a href="https://www.behance.net/kyannakrueger" className={styles.link}>Behance</a>
          <h2 className={styles.projects}>Projects</h2>
          <div className={styles.filter}>
            <button 
              className={activeCategory === "graphicDesign" ? styles.btnActive : styles.btnDisabled}
              onClick={() => handleCategoryChange("graphicDesign")}
            >
              Graphic Design
            </button>
            <button 
              className={activeCategory === "uiux" ? styles.btnActive : styles.btnDisabled}
              onClick={() => handleCategoryChange("uiux")}
            >
              UI/UX
            </button>
            <button 
              className={activeCategory === "motionGraphics" ? styles.btnActive : styles.btnDisabled}
              onClick={() => handleCategoryChange("motionGraphics")}
            >
              Motion Graphics
            </button>
          </div>
          <div className={styles.gallery}>
  {activeCategory === "graphicDesign" && (
    <>
      <Link href="/dior" className={styles.projectCard}>
        <img src="Dior 1920x1080.png" alt="A Dior exhibition poster at a bus stop" className={styles.project} />
        <div className={styles.overlay}>
          <span className={styles.projectName}>Dior Through the Decades</span>
        </div>
      </Link>
      <Link href="/sparq" className={styles.projectCard}>
        <img src="sparqMockup2.2.png" alt="Cans of an alcoholic beverage on an orange background" className={styles.project} />
        <div className={styles.overlay}>
          <span className={styles.projectName}>Sparq&Sip</span>
        </div>
      </Link>
      <Link href="/vow" className={styles.projectCard}>
        <img src="VOW.png" alt="Magazine collection" className={styles.project} />
        <div className={styles.overlay}>
          <span className={styles.projectName}>VOW Magazine</span>
        </div>
      </Link>
    </>
  )}

  {activeCategory === "motionGraphics" && (
    <Link href="/theater" className={styles.projectCard}>
      <img src="motion4.png" alt="Graphic of a theatre" className={styles.project} />
      <div className={styles.overlay}>
        <span className={styles.projectName}>Theater Etiquette</span>
      </div>
    </Link>
  )}
</div>

        </div>
      </div>
    </div>
  );
}
