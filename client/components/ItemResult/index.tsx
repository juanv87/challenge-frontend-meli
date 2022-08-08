/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { ItemProduct } from "../../interfaces/ItemProduct";
import styles from "./ItemResult.module.scss";

interface Props {
  item: ItemProduct;
}

export const ItemResult = ({ item }: Props) => {
  const { title, price, picture, id, free_shipping, city } = item;
  return (
    <li className={styles.item_result_container}>
      <Link href={`items/${id}`}>
        <a>
          <div className={styles.item_photo}>
            <img width="180" height="180" src={picture} alt="" />
          </div>
        </a>
      </Link>
      <div className={styles.item_info}>
        <Link href={`items/${id}`}>
          <a>
            <div className={styles.item_price}>
              <span>${Intl.NumberFormat("es-ES").format(price.amount)}</span>
              {free_shipping && (
                <img width="20" height="20" src="/ic_shipping.png" alt="" />
              )}
            </div>
          </a>
        </Link>
        <Link href={`items/${id}`}>
          <a>
            <div className={styles.item_title}>
              <span>{title}</span>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.item_locale}>
        <span>{city}</span>
      </div>
    </li>
  );
};
