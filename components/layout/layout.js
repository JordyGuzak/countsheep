import styles from "./layout.module.css";
import Head from "next/head";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>CountSheep</title>
                <meta name="description" content="iPhone cases"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </div>
    )
}