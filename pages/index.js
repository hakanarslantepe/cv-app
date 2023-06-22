import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className="text-[#ff4e00] text-3xl font-bold mb-5 uppercase">
            Create professional resumes in minutes, free.
          </h1>
          <Link href="./newForm">
            <button className={styles.button}>CREATE YOUR CV</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
