import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Relay.module.css';

export default function Relay() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className={styles.intro}>
            <div className={styles.introLeft}>
                <h1  className={styles.heading}>Relay</h1>
                <p className={styles.subHeading}>APP | RESEARCHER & UI/UX DESIGNER | SEPTEMBER 2024 - DECEMBER 2024</p>
                <p  className={styles.introP}>Relay is Canada’s first ridesharing app for parents, designed to make it 
                easy to arrange safe, reliable transportation for your children. Whether you’re a busy parent juggling 
                a hectic schedule or a new immigrant seeking to expand your network, Relay connects you with trusted 
                families in your community—no random drivers.</p>
                <button className={styles.blogbtn}>
                    Visit Blog
                </button>
                <h2 className={styles.h2}>Table of Contents</h2>
                <p className={styles.introP}> Click on a number to jump to that section!</p>
                <div className={styles.toc}>
                    <p className={styles.num}>01</p>
                    <p className={styles.tocP}>The Market Gap</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>02</p>
                    <p className={styles.tocP}>User Persona’s</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>03</p>
                    <p className={styles.tocP}>What Relay Does</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>04</p>
                    <p className={styles.tocP}>Why Parents Trust Relay</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>05</p>
                    <p className={styles.tocP}>Wire Frames</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>06</p>
                    <p className={styles.tocP}>Branding</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>07</p>
                    <p className={styles.tocP}>Promotional Video</p>
                </div>
            </div>
            <img src="relay1.png"
            className={styles.introImg}
            />
        </div>

        <div className={styles.market}>
          <h2 className={styles.h2}>The Market Gap</h2>
          <div className={styles.marketGroup}>
            <img src="relay5.png"
              className={styles.marketImg}
            />
            <p className={styles.marketingP}>Many working parents face daily challenges coordinating their children’s transportation, 
                often relying on last-minute arrangements with friends or family. Despite the demand for a reliable solution, 
                no app in Canada offers a streamlined, secure way to organize carpools within a trusted community.
            </p>
          </div>
          <div className={styles.marketGroup}>
            <img src="relay4.png"
              className={styles.marketImg}
            />
            <p className={styles.marketingP}>
            Our primary research revealed that 75% of working parents struggle with balancing work and their kids' transportation. 
            When unable to pick them up on time, they often rely on last-minute solutions like waiting, skipping activities,
            or taking transit alone—findings that align with Statistics Canada’s study.<br/>
            You can read our full research report  <a href="https://drive.google.com/file/d/1AFnJPVDrIHCMcRFgdjcG65a-SkyHVtI9/view" className={styles.hyperlink}>here</a>
            </p>
          </div>
        </div>

        <div className={styles.personas}>
        <h2 className={styles.h2}>User Persona's</h2>
        <div className={styles.personasGroup}>
          <div className={styles.personasTextGroup}>
            <p className={styles.bigP}>Joseph Lim: Full-Time Software Engineer, Parent</p>
              <p className={styles.personasP}>
                Joseph, a full-time software engineer and father, struggles to arrange reliable transportation for his 10-year-old
                due to his busy schedule. He values technology that simplifies carpooling and helps connect with trusted parents.
              </p>
              <p className={styles.personasP}>
                A secure, community-based platform with features like GPS tracking and driver verification is essential for his peace of mind.
              </p>
          </div>
            <img src="RelayUser1.png"
              className={styles.personaImg}
            />
          </div>
          <div className={styles.personasGroup}>
            <img src="RelayUser2.png"
              className={styles.personaImg}
            />
            <div className={styles.personasTextGroupR}>
              <p className={styles.bigP}>Sarah Matthews: Part-Time Climate Policy Advisor</p>
              <p className={styles.personasP}>
                Sarah, a part-time climate policy advisor and mother of two, enjoys fostering community connections and helping others with transportation. 
                She regularly volunteers to drive her kids and their friends but struggles to connect with busy parents in need.
              </p>
              <p className={styles.personasP}>
                She seeks a user-friendly app that streamlines scheduling, facilitates in-app communication, and builds trust through reviews and ratings.
              </p>
            </div>
          </div>
        </div>
      <div className={styles.back}>
        <Back />
        </div>
      </div>
    </div>
  );
}