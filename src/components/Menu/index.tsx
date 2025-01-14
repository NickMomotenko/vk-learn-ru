import styles from "./styles.module.css";

export const Menu = () => {
  let arr = ["Все котики", "Любимые котики"];

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {arr.map((text) => (
          <li className={styles.menu__link}>{text}</li>
        ))}
      </ul>
    </nav>
  );
};
