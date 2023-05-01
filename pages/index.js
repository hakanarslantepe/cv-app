import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Your Cv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className="text-[#ff4e00] text-3xl font-bold mb-5">
            ONLINE VE UCRETSIZ CV OLUSTUR
          </h1>
          <Link href="./form">
            <button className={styles.button}>CV OLUSTUR</button>
          </Link>
        </div>
      </main>
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
    </div>
  );
}
