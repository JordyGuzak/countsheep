import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://instagram.com/countsheep" className={styles.footer__brand} target="_blank"
               rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="instagram" width={24} height={24}/>
            </a>
            <a href="https://twitter.com/countsheep" className={styles.footer__brand} target="_blank"
               rel="noopener noreferrer">
                <Image src="/twitter.svg" alt="twitter" width={24} height={24}/>
            </a>
            <a href="https://facebook.com/countsheep" className={styles.footer__brand} target="_blank"
               rel="noopener noreferrer">
                <Image src="/facebook.svg" alt="facebook" width={24} height={24}/>
            </a>
        </footer>
    )
}