import styles from "./styles.module.css";

import { ReactSVG } from "react-svg";

type ButtonProps = {
  icon?: string;
  classes?:string;
};

export const Button: React.FC<ButtonProps> = ({ icon, classes }) => {
  return (
    <button className={`${styles.button} ${classes}`}>
      <ReactSVG src={icon} fill="red" />
    </button>
  );
};
