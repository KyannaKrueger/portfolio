import Link from "next/link"; 
import Nav from '../components/molecules/Nav';
import styles from '../styles/Index.module.css';
import { Playfair_Display } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Nunito } from 'next/font/google';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <h1 className={styles.head}>Welcome to My Portfolio</h1>
        <p className={styles.p}>This site is currently under construction. Come back soon and check out my behance portfolio for now!</p>
        <a href="https://www.behance.net/kyannakrueger">Behance</a>
        {/*<Link href="/dior">Dior Poster Project</Link>*/}
        <div>
          <h2 className={styles.projects}>Projects</h2>
            <div className={styles.filter}>

            </div>
            <div className={styles.gallery}>
              <Link href="/dior">
                <img src="Dior 1920x1080.png"
                alt="A Dior exhibition poster at a bus stop"
                className={styles.project}
                />
              </Link>
            </div>
        </div>
      </div>
      </div>
  );
}
