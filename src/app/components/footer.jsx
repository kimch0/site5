import Image from "next/image";
// import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.firstRow}>
        <div className="menu-logo">
          <span>Auren</span>
        </div>
        {/* <div className={styles.links}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div> */}
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Auren. All rights reserved.</span>
        </div>
        <div className={styles.social}>
          <Image src="/site5/insta.png" alt="Instagram" width={32} height={32} />
          <Image src="/site5/link.png" alt="Linkedin" width={32} height={32} />
          <Image src="/site5/face.png" alt="Facebook" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
