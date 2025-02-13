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
        Graphic Designer 🙢 Digital Marketer 🙢 UI/UX 🙢 Motion Graphics 🙢
      </div>
    </div>
  );
};

export default Scroll;
