import '../styles/globals.css';
import Head from 'next/head';
import { Playfair_Display } from 'next/font/google';
import { Karla } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />;
      </>
    );
  }
  

