import styles from "./styles.module.css";

type ListProps = {
  children: React.ReactNode;
};

export const List: React.FC<ListProps> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
