import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Your Cv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://github.com/hakanarslantepe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span className={styles.logo}>
            <Image src="/github.png" alt="Github Logo" width={30} height={30} />
          </span>
          Hakan
        </a>
      </footer>
    </>
  );
}

export default MyApp;
