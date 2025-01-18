import { NavLink } from "react-router";

import styles from "./styles.module.css";

export const Menu = () => {
  let menuConfig = [
    { title: "Все котики", url: "/" },
    { title: "Любимые котики 2", url: "/liked" },
  ];

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {menuConfig?.map(({ title, url }, ind) => (
          <li className={styles.menu__item} key={ind}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                `${styles.menu__link} ${isActive ? styles.active : ""}`
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
