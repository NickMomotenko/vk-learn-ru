import styles from "./styles.module.css";

import { ReactSVG } from "react-svg";

type ButtonProps = {
  children?: React.ReactNode;
  icon?: string;
  classes?: string;
  onClick?: () => {};
};

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  classes,
  onClick,
}) => {
  return (
    <button className={`${styles.button} ${classes}`} onClick={onClick}>
      {icon && <ReactSVG src={icon} fill="red" />}
      <span className={styles.button__text}>{children}</span>
    </button>
  );
};
