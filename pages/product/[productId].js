import React from "react";

import {useRouter} from "next/router";
import Image from "next/image";
import useSWR from "swr";

import styles from "./product.module.css";

const fetcher = url => fetch(url).then(res => res.json())

export default function ProductPage() {
    const router = useRouter();
    const {productId} = router.query;
    const LoadingLayout = () => <div>Loading...</div>;
    const ErrorLayout = () => <div>Failed to load product.</div>;
    const {data, error} = useSWR(`/api/products/${productId}`, fetcher);

    if (!data) return LoadingLayout();
    if (error) return ErrorLayout();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={data.imageUrl} layout="fill" className={styles.image}/>
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>{data.name}</h1>
                <div className={styles.rating}>
                    {[0, 1, 2, 3, 4].map(i => <div key={i} className={i < data.rating ? styles.starFilled : styles.star}/>)}
                    <span className={styles.reviews}>{data.reviews} reviews</span>
                </div>
                <p className={styles.description}>{data.description}</p>
                <p className={styles.price}>€{data.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}