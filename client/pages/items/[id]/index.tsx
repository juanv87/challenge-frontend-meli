/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import { BreadCrumb } from "../../../components/BreadCrumb";
import { BtnContainer } from "../../../components/ui/BtnContainer";
import { Container } from "../../../components/ui/LayoutContainer";
import { ProductDetail } from "../../../interfaces/ProductDetail";
import { CategoriesContext } from "../../../services/context";
import { getItemDetail } from "../../../services/itemsRepository";
import styles from "./ProductItem.module.scss";

interface Props {
  product: ProductDetail;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const product = await getItemDetail(query.id as string);
  return {
    props: { product },
  };
};

const ProductPage = ({ product }: Props) => {
  const { categoriesStore } = useContext(CategoriesContext);

  const { title, price, description, picture, sold_quantity, condition } =
    product.item;
  return (
    <>
      <Head>
        <title>{title} // Vista 3 / Detalle del producto</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={picture} />
      </Head>
      <Container>
        <BreadCrumb categories={categoriesStore.categories} />
        <section className={styles.product_page}>
          <div className={styles.product_container}>
            <div className={styles.product_col_left}>
              <figure className={styles.product_image}>
                <img width="680" src={picture} alt={title} />
              </figure>
              <div className={styles.product_description}>
                <h3>Descripción del producto</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className={styles.product_col_right}>
              <div className={styles.subtitle}>
                <span>
                  {condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {`${sold_quantity} vendidos`}
                </span>
              </div>
              <h1>{title}</h1>
              <div className={styles.price}>
                <span>${Intl.NumberFormat("es-ES").format(price.amount)}</span>
              </div>
              <BtnContainer>Comprar</BtnContainer>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProductPage;
