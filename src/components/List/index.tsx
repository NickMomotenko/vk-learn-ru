import styles from "./styles.module.css";

type ListProps = {
  children: React.ReactNode;
  tagName?: string;
};

export const List: React.FC<ListProps> = ({ children, tagName = "ul" }) => {
  let TagName = tagName ?? tagName;

  return <TagName className={styles.list}>{children}</TagName>;
};
