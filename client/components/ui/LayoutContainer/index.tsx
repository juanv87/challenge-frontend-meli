import styles from "./Container.module.scss";

interface Props {
  children?: React.ReactNode;
}
export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
