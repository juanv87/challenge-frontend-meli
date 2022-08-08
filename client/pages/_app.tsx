import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { SearchBar } from "../components/SearchBar";

import { CategoriesContextProvider } from "../services/context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const onSearchValue = () => {
    if (searchValue !== "") {
      router.push(`/items?search=${searchValue}`);
    }
  };

  return (
    <>
      <Head>
        <title>Vista 1 / Caja de búsqueda</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <meta
          name="description"
          content="Test Front-End práctico. Juan Andrés Villegas."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <SearchBar
        searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={onSearchValue}
      />
      <CategoriesContextProvider initialCategories={{ categories: [] }}>
        <Component {...pageProps} />
      </CategoriesContextProvider>
    </>
  );
}

export default MyApp;
