import Nav from "../components/molecules/Nav";
import Back from "../components/atoms/Back";
import styles from '../styles/Relay.module.css';
import Carousel from "../components/molecules/Carousel";

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
                families in your community—no random drivers. With safety features such as GPS Tracking, Ride specific 
                pins and Ai powered notifications, Relay is the app that parents trust.</p>
                <a href="https://relay.arspera.com/" className={styles.blogbtn}>
                    Visit Blog
                </a>
                <h2 className={styles.h2}>Table of Contents</h2>
                <div className={styles.toc}>
                    <p className={styles.num}>01</p>
                    <p className={styles.tocP}>The Market Gap</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>02</p>
                    <p className={styles.tocP}>User Personas</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>03</p>
                    <p className={styles.tocP}>Why Parents Trust Relay</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>04</p>
                    <p className={styles.tocP}>Wire Frames</p>
                </div>
                <div className={styles.toc}>
                    <p className={styles.num}>05</p>
                    <p className={styles.tocP}>Branding</p>
                  </div>
                  <div className={styles.toc}>
                      <p className={styles.num}>06</p>
                      <p className={styles.tocP}>Promotional Items</p>
                  </div>
                  <div className={styles.toc}>
                        <p className={styles.num}>07</p>
                        <p className={styles.tocP}>Project Reflection</p>
                  </div>
                  <div className={styles.toc}>
                        <p className={styles.num}>08</p>
                        <p className={styles.tocP}>App Demo</p>
                  </div>
            </div>
            <img src="relay1.2.png"
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
        <h2 className={styles.h2}>User Personas</h2>
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
        <div className={styles.trust}>
          <div className={styles.reasons}>
            <h2 className={styles.h2}>Why Parents trust Relay</h2>
            <div className={styles.reasonRow}>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>01</p>
                <p className={styles.reasonReal}>Trusted Connections</p>
              </div>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>02</p>
                <p className={styles.reasonReal}>Real-Time GPS Tracking</p>
              </div>
            </div>
            <div className={styles.reasonRow}>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>03</p>
                <p className={styles.reasonReal}>AI Ride Notifications</p>
              </div>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>04</p>
                <p className={styles.reasonReal}>Unique Ride PINs</p>
              </div>
            </div>
            <div className={styles.reasonRow}>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>05</p>
                <p className={styles.reasonReal}>Reliable Scheduling</p>
              </div>
              <div className={styles.reason}>
                <p className={styles.reasonNum}>06</p>
                <p className={styles.reasonReal}>Build Trust</p>
              </div>
            </div>
          </div>            
          <img src="relay3.1.png" className={styles.trustMockup}/>
        </div>
        <div className={styles.wireframes}>
          <h2 className={styles.h2}>Wireframes</h2>
          <p className={styles.marketingP}>
            Use the arrows to view the final wireframes for our key pages and features.
            While multiple versions were tested, these screens represent the final designs after user feedback.
          </p>
          <div className={styles.carousel}>
            <Carousel />
          </div>
          <h2 className={styles.h2}>App Workflow</h2>
          <p className={styles.marketingP}>
            This is a map that lists all the features and how they are connected in our app. This map includes features that have already been coded, and future features we want to add such as passenger accounts.
          </p>
          <iframe src="https://embed.figma.com/board/UQ8HVMw4achSHFZ8b8NcGr/Relay---App-Workflow?node-id=0-1&embed-host=share" className={styles.figma} allowfullscreen></iframe>
        </div>
        <div className={styles.branding}>
          <h2 className={styles.h2}>Branding</h2>
          <img src="relay6.png"
          className={styles.brandImg}
          />
          <h2 className={styles.h2}>The Logo</h2>
          <img src="relay7.2.png"
          className={styles.logo}
          />
          <p className={styles.brandP}> R + Eco-friendly + Radar + Side Mirror + Connection</p>
        </div>
        <div className={styles.promoVideo}>
          <h2 className={styles.h2}>Promotional Video</h2>

          <p className={styles.promoP}>
            This promotional video uses visual storytelling to highlight real pain points discovered in our research,
            while providing Relay as a solution. The promotional video was storyboarded in one week, shot in two days,
            and edited in a few weeks.
          </p>
        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iqs0Pss_1fc?si=EPphv7Y1iCxDHmS_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 className={styles.h2}>Business Cards & Brochure</h2>
        <div className={styles.promoImgCont}>
          <img src="relay10.png"
            className={styles.promoImg}
            />
            <img src="relay11.png"
            className={styles.promoImg}
            />
          </div>
        </div>
        <div className={styles.reflection}>
          <h2 className={styles.h2}>Project Reflection</h2>
          <div className={styles.reflectionCont}>
            <div className={styles.reflectionWords}>
              <p className={styles.reflectionP}>
                Relay is honored to have won the D3/FSWD 2024 Annual Student Design & Technology Showcase, but what we’re
                most proud of is the journey it took to get there. This project was our first collaboration with students
                from another program, and navigating its ambitious scope was both challenging and rewarding. Through countless
                hours of brainstorming, refining ideas, and solving complex problems, we designed and developed an app that meets
                a real need for parents—all within just 15 weeks. We’re excited about the possibilities of taking this project even further.
              </p>
              <h3 className={styles.h3}>Full Team</h3>
              <p className={styles.credits}>
                <span className={styles.bold}>Digital Design and Development</span>
                <br/>
                Gloria Chan, Vanessa Huang, Kyanna Krueger, Evan Schatz, Zeno Wong</p>
              <p className={styles.credits}>
              <span className={styles.bold}>Full Stack Web Development</span>
              <br/> Armaan Brar, Byron Dray, Evann Li</p>
            </div>
          <img src="relay9.jpg"
              className={styles.reflectImg}
            />
          </div>
          <div className={styles.promoVideo}>
          <h2 className={styles.h2}>App Demo</h2>
          <p className={styles.promoP}>
            While our app isn't available on the app store yet, check out the features of our app with this app demonstration!
          </p>
          <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BwlblRQnJC4?si=EaNe3Vswj3qor0jK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

