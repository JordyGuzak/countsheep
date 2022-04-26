import useSWR from "swr";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import ProductCard from "../components/product-card/product-card";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Home() {
    const {data, error} = useSWR('/api/products', fetcher);

    if (error) 
        return <div>Failed to load products.</div>
    
    if (!data) 
        return <div>Loading...</div>

    return (
            <div className={styles.grid}>
                {data.map(product => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <a>
                            <ProductCard title={product.name}
                                         description={product.description}
                                         price={`€${product.price}`}
                                         image={product.imageUrl}/>
                        </a>
                    </Link>
                ))}
            </div>
    );
}
