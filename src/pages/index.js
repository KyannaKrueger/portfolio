import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link"; 
import Nav from '../components/molecules/Nav';
import styles from '../styles/Index.module.css';
import Scroll from "../components/atoms/Scroll";
import { Playfair_Display } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Nunito } from 'next/font/google';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("graphicDesign");
  const [showSplash, setShowSplash] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleEnterClick = () => {
    setShowSplash(false);
    localStorage.setItem("hasVisited", "true"); 
  };

  useEffect(() => {
    if (!localStorage.getItem("hasVisited")) {
      setShowSplash(true); 
    } else {
      setShowSplash(false); 
    }
  }, []); 

  return (
    <div className={styles.pageContainer}>
      {showSplash && (
        <div className={styles.splashScreen}>
          <div className={styles.splashRight}>
            <img className={styles.splashImg} src="blackLogo1.1.svg" alt="Logo" />
            <p className={styles.pSplash}>KYANNA KRUEGER</p>
            <p className={styles.pSplash}>Graphic Designer | Digital Marketer</p>
            <button className={styles.enterButton} onClick={handleEnterClick}>
              Enter Portfolio
            </button>
          </div>
        </div>
      )}

      {!showSplash && (
        <>
          <Nav />
          <Scroll />
          <video className={styles.bgVideo} src="landingVid2.mp4" autoPlay loop muted playsInline />
          <div className={styles.main}>
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
                  <Link href="/watch" className={styles.projectCard}>
                    <img src="watch1.png" alt="Realistic drawing of a blue rolex watch" className={styles.project} />
                    <div className={styles.overlay}>
                      <span className={styles.projectName}>Realistic Rolex</span>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
