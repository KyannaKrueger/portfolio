import Link from "next/link"; 
import Nav from '../components/molecules/Nav';
import { Playfair_Display } from 'next/font/google';
import { Karla } from 'next/font/google';
import { Nunito } from 'next/font/google';

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>Welcome to My Portfolio</h1>
      <p>This site is currently under construction. Come back soon and check out my behance portfolio for now!</p>
      <a href="https://www.behance.net/kyannakrueger">Behance</a>
      {/*<Link href="/dior">Dior Poster Project</Link>*/}
    </div>
  );
}
