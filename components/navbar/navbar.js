import styles from "./navbar.module.css";
import Image from "next/image";


export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <a href={""}>
                <span className={styles.navbar__title}>Count</span><span
                className={styles.navbar__title + ' ' + styles.sheep}>Sheep</span>
            </a>
            <div className={styles.navbar__menuContainer}>
                <a href="" className={styles.navbar__menuItem}><Image src="/shopping-bag.svg"
                                                                      alt="shopping cart" width={24}
                                                                      height={24}/></a>
                <a href="" className={styles.navbar__menuItem}><Image src="/heart.svg" alt="wishlist"
                                                                      width={24} height={24}/></a>
                <a href="" className={styles.navbar__menuItem}><Image src="/user.svg" alt="user" width={24}
                                                                      height={24}/></a>
            </div>
        </nav>
    )
}