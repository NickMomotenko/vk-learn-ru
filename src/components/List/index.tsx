import styles from "./styles.module.css";

type ListProps = {
  children: React.ReactNode;
  tagName?: React.ElementType;
};

export const List: React.FC<ListProps> = ({
  children,
  tagName: TagName = "ul",
}) => {
  return <TagName className={styles.list}>{children}</TagName>;
};
