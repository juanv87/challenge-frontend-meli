/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./SearchBar.module.scss";
import Link from "next/link";
import { Container } from "../ui/LayoutContainer";

interface Props {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const SearchBar = ({ searchValue, onChange, onSearch }: Props) => {
  const handleSearch = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    onSearch();
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.search_bar}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img width="53" height="36" src="/Logo_ML.png" alt="logo" />
              </a>
            </Link>
          </div>
          <form onSubmit={handleSearch} className={styles.nav_search}>
            <input
              onChange={onChange}
              value={searchValue}
              type="text"
              placeholder="Nunca dejes de buscar"
            />
            <button type="submit">
              <img width="18" height="18" src="/Ic_Search.png" alt="search" />
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
};
