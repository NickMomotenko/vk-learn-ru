import styles from "./styles.module.css";

type ContentProps = {
  children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
