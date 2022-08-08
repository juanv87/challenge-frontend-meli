import { GetServerSideProps } from "next";
import { ItemResult } from "../../components/ItemResult";
import { Container } from "../../components/ui/LayoutContainer";
import { ItemsSearchResults } from "../../interfaces/ItemsData";
import styles from "./SearchResults.module.scss";
import { useEffect } from "react";
import useAppContext from "../../services/context";
import { BreadCrumb } from "../../components/BreadCrumb";
import Head from "next/head";
import { getItemsBySearch } from "../../services/getItemsBySearch";

interface Props {
  itemsSearchResults: ItemsSearchResults;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const itemsSearchResults = await getItemsBySearch(query.search as string);
  return {
    props: { itemsSearchResults },
  };
};

const Items = ({ itemsSearchResults }: Props) => {
  const { categories, items } = itemsSearchResults;
  const { setCategoriesStore } = useAppContext();

  useEffect(() => {
    setCategoriesStore({ categories });
  }, []);

  return (
    <>
      <Head>
        <title>Vista 2 / Resultado de la búsqueda</title>
      </Head>
      <Container>
        <BreadCrumb categories={categories} />
        <section className={styles.section}>
          <ul>
            {itemsSearchResults &&
              items.map((item) => <ItemResult key={item.id} item={item} />)}
          </ul>
        </section>
      </Container>
    </>
  );
};

export default Items;
