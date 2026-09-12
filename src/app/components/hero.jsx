import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={`${styles.hero} ${styles.elevationGrid}`}>
      <div className={styles.leftColumn}>
        <p className={styles.drawingMeta}>
          <span>Elevation 01</span>
          <span>Sheet A</span>
          <span>1:1</span>
        </p>
        <h1 className={styles.brandDisplay}>AUREN</h1>
        <p className={styles.heroStatement}>
          Independent mechanical watches drawn with the patience of architecture
          — measured, restrained, built to endure.
        </p>
        <a className={styles.btnPrimary} href="#collection">
          Enter the collection
        </a>
      </div>
      <div className={styles.rightColumn}>
        <figure className={styles.heroFigure} data-parallax-watch>
          <Image
            src="/hero-section.jpg"
            alt="AUREN flagship mechanical watch with champagne dial and brown leather strap"
            height="638"
            width="479"
            priority={true}
          />
          <figcaption className={styles.drawingCaption}>
            <span>Section cut — Model Atelier 40</span>
            <span>Ref. ATL-40</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
