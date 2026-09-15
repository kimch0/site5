"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className="menu-logo">
        <Link href="/">Auren</Link>
      </div>

      {/* Desktop */}
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/#featured-watches">Featured Watches</Link>
        <Link href="/#craftsmanship">Craftsmanship</Link>
        <Link href="/#about-us">About Us</Link>
      </div>

      <Link href="/#contact" className={styles.contactCTA}>
        Contact
      </Link>

      {/* Mobile button */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/#featured-watches" onClick={closeMenu}>
          Featured Watches
        </Link>

        <Link href="/#craftsmanship" onClick={closeMenu}>
          Craftsmanship
        </Link>

        <Link href="/#about-us" onClick={closeMenu}>
          About Us
        </Link>

        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
