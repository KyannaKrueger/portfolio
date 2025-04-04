import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Dream.module.css';

export default function Vow() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <img src="magazine1.1.png"
            alt="Magazine on a table"
            className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.rowCont}>
            <div className={styles.writing}>
              <h1 className={styles.heading}>Dream Scapes Quarterly</h1>
              <p  className={styles.subHeading}>MAGAZINE | GRAPHIC DESIGN | OCTOBER 2024</p>
              <a href="https://www.figma.com/proto/X1hW4OuZqqNc0QkGn5uz1M/Kyanna-Krueger-Electronic-Midterm?node-id=85-16&p=f&t=sRXU7VKg6aLqOgqD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=85%3A16" className={styles.blogbtn}>
                      View Digital Version
              </a>
              <p className={styles.p}>Dream Scapes Quarterly is a subscription-based magazine designed for art and architecture enthusiasts. Each issue highlights an artist renowned for their surrealistic architectural creations, offering an inspiring blend of visionary design and artistic expression. Available in both digital and print formats, the magazine provides readers with an immersive experience into the world of imaginative architecture.</p>
              <p className={styles.p}>Beyond the artist spotlight, Dream Scapes Quarterly has sections on the advancements of AI, photo gallery’s and more to help inspire readers.</p>
            </div>
            <img src="magazine2.png"
            alt="A Dior exhibition poster on a tablet"
            className={styles.tabletImage}
            />
          </div>
          <h2 className={styles.heading}>Featured Spreads</h2>
          <img src="spread1.png"
            className={styles.spread}
            />
            <img src="spread2.png"
              className={styles.spread}
            />
        </div>
        <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}
