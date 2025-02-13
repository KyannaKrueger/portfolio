import { useEffect, useRef } from "react";
import styles from "../../styles/Scroll.module.css";

const Scroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.innerHTML += scroll.innerHTML; 
    }
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scroll} ref={scrollRef}>
        <span>Graphic Designer</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>Digital Marketer</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>UI/UX</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>Motion Graphics</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>Graphic Designer</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>Digital Marketer</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>UI/UX</span> 
        <span className={styles.symbol}> 🙢 </span> 
        <span>Motion Graphics</span> 
        <span className={styles.symbol}> 🙢 </span> 
      </div>
    </div>
  );
};

export default Scroll;
