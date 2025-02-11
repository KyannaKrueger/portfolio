import { useState } from "react";
import styles from "../../styles/Carousel.module.css";

export default function Carousel() {
  const images = ["highlights.png", "Onboard.png", "Trips.png", "Community.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <button className={`${styles.carouselButton} ${styles.prev}`} onClick={prevSlide}>❮</button>
        <img 
          className={styles.carouselImage} 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
        />
        <button className={`${styles.carouselButton} ${styles.next}`} onClick={nextSlide}>❯</button>
      </div>
      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
