import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ParaLegal</h1>
      <p className={styles.subtitle}>Your legal document platform.</p>
      <div className={styles.grid}>
        <a href="/nda" className={styles.card}>
          <h2>Mutual NDA Creator →</h2>
          <p>
            Fill in a short form and get a completed Mutual Non-Disclosure
            Agreement ready to sign and download.
          </p>
        </a>
      </div>
    </main>
  );
}
