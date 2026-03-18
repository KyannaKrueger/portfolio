import { useState } from "react";
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
  const router = useRouter();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.pageContainer}>
      <Nav />
      <Scroll />
      <video 
        className={styles.bgVideo} 
        src="landingVid2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      
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
                  <span className={styles.projectName}>Realistic Watch Drawing</span>
                </div>
              </Link>
              <Link href="/void" className={styles.projectCard}>
                <img src="voidBanner.png" alt="a video game poster" className={styles.project} />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>Void Circuit - Poster</span>
                </div>
              </Link>
              <Link href="/dream" className={styles.projectCard}>
                <img src="magazine1.1.png" alt="a magazine on a table" className={styles.project} />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>Dream Scapes Magazine</span>
                </div>
              </Link>
              <Link href="/pomo" className={styles.projectCard}>
                <img src="Program guide mockup.png" className={styles.project} alt="PoMoArts guide" />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>PoMoArts - Work in progress!</span>
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
          {activeCategory === "uiux" && (
            <>
              <Link href="/relay" className={styles.projectCard}>
                <img src="relay8.png" className={styles.project} alt="Relay Rideshare" />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>Relay Rideshare</span>
                </div>
              </Link>
              <Link href="/fit" className={styles.projectCard}>
                <img src="fitQuest2.1.png" className={styles.project} alt="FitQuest" />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>FitQuest</span>
                </div>
              </Link>
              <Link href="/" className={styles.projectCard}>
                <img src="quack1.png" className={styles.project} alt="Quack Attack" />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>Quack Attack - Coming Soon!</span>
                </div>
              </Link>
              <Link href="/" className={styles.projectCard}>
                <img src="zara1.png" className={styles.project} alt="Zara analysis" />
                <div className={styles.overlay}>
                  <span className={styles.projectName}>Zara VS Aritzia UI/UX Analysis - Coming Soon!</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
