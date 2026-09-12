import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className="menu-logo">
                <Link href="/">Auren</Link>
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/about">Featured Watches</Link>
                <Link href="/craftmanship">Craftsmanship</Link>
                <Link href="/collections">Collections</Link>
                <Link href="/abount us">About Us</Link>
            </div>
            <Link href="/contact" className={styles.contactCTA}>Contact</Link>
        </nav>
    );

}