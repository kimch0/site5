import Image from "next/image";
import styles from "../styles/Craftsmanship.module.css";

export default function Craftsmanship() {
  return (
    <div className={styles.craftsmanship}>
      <div className={`${styles.header} ${styles.dividerBorder}`}>
        <h2 className={styles.title}>Craftsmanship</h2>
        <p className={styles.description}>
          Making is a sequence of measured acts. Each plate records what the
          previous one prepared.
        </p>
      </div>
      <div className={`${styles.section} ${styles.dividerBorder}`}>
        <h3 className={styles.sectionNumber}>01</h3>
        <div>
          <h4 className={styles.sectionTitle}>Movement</h4>
          <p className={styles.sectionText}>
            Calibre AR-21 is assembled and regulated in-house. Bridges receive
            côtes de Genève; edges are beveled by hand until light breaks
            cleanly along every plane.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/auren-movement.png"
            alt="Craftsmanship 01"
            fill={true}
            className={styles.sectionImage}
          />
        </div>
      </div>
    </div>
  );
}
