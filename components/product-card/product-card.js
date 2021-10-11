import React from "react";
import styles from './product-card.module.css'
import Image from "next/image";

export default function ProductCard(props) {
    return (
        <div className={styles.productCard}>
            <Image src={props.image} width={200} height={356} className={styles.productCard__image}/>
            <span className={styles.productCard__title}>{props.title}</span>
            <span className={styles.productCard__description}>{props.description}</span>
            <span className={styles.productCard__price}>{props.price}</span>
        </div>
    );
}