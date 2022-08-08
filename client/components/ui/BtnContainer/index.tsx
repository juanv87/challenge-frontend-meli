import styles from "./BtnContainer.module.scss";

interface Props {
  children?: React.ReactNode;
}
export const BtnContainer = ({ children }: Props) => {
  return (
    <a href="#" className={styles.container}>
      {children}
    </a>
  );
};
