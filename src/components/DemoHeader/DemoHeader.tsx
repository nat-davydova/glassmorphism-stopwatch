import styles from "./DemoHeader.module.css";

export function DemoHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Glassmorphism Stopwatch</h1>
      <div className={styles.header__btns}>
        <a
          href="https://github.com/nat-davydova/glassmorphism-stopwatch"
          className={styles.header__btn}
          target="_blank"
          title="Check On Github"
        >
          Check On Github
        </a>
      </div>
    </header>
  );
}
