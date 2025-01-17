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
      <p>Check out my projects:</p>
      <ul>
        <li>
          <Link href="/dior">Dior Poster Project</Link>
        </li>
      </ul>
    </div>
  );
}
