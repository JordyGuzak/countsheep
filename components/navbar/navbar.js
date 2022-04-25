import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
    flex-direction: row;
    padding: 1rem;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 100%;
    background-color: white;
    z-index: 999;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 1.5em;
`

const Sheep = styled.span`
    color: blue;
`

export default function NavBar() {
    return (
        <Nav>
            <Link href="/">
                <a href={""}>
                    <Title>Count</Title>
                    <Sheep>Sheep</Sheep>
                </a>
            </Link>
            <div className={styles.navbar__menuContainer}>
                <a href="" className={styles.navbar__menuItem}><Image src="/shopping-bag.svg"
                                                                      alt="shopping cart" width={24}
                                                                      height={24}/></a>
                <a href="" className={styles.navbar__menuItem}><Image src="/heart.svg" alt="wishlist"
                                                                      width={24} height={24}/></a>
                <a href="" className={styles.navbar__menuItem}><Image src="/user.svg" alt="user" width={24}
                                                                      height={24}/></a>
            </div>
        </Nav>
    )
}