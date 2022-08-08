import Link from "next/link";
import React from "react";
import styles from "./BreadCrumb.module.scss";
interface Props {
  categories: string[];
}
export const BreadCrumb = ({ categories }: Props) => {
  return (
    <>
      {categories.length > 0 ? (
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/items?search=${category}`}>
                <a>{category}</a>
              </Link>
              <i className="arrow right"></i>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.categories}>
          <li>
            <Link href={"/"}>
              <a>Inicio</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
