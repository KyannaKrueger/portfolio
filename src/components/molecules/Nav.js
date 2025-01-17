import React from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <Link href="/">
          <img 
            src="Asset 1.png" 
            alt="Logo" 
            className={styles.navLogo}
          />
        </Link>
      <ul className={styles.navOptions}>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>About</Link></li>
        <li className={styles.navList}><Link href="/" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};

