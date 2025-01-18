import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img 
          src="Asset 1.png" 
          alt="Logo" 
          className={styles.navLogo}
        />
      </Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles.navOptions} ${isMenuOpen ? styles.show : ""}`}>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>About</Link></li>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
}


