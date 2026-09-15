"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "../styles/CraftSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CraftSection({
  number,
  title,
  text,
  image,
  imagePosition = "right",
}) {
  const craftSectionRef = useRef(null);
  const initialX = imagePosition === "right" ? 100 : -100;

  useEffect(() => {
    if (craftSectionRef.current) {
      gsap.fromTo(
        craftSectionRef.current,
        { opacity: 0, x: initialX },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: craftSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <div
      ref={craftSectionRef}
      className={`${styles.section} ${styles.dividerBorder}`}
    >
      <h3 className={styles.sectionNumber}>{number}</h3>

      {imagePosition === "right" ? (
        <>
          <div className={styles.paddingRight}>
            <h4 className={styles.sectionTitle}>{title}</h4>
            <p className={styles.sectionText}>{text}</p>
          </div>

          <div className={`${styles.imageContainer}`}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.sectionImage}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.paddingLeft}>
            <h4 className={styles.sectionTitle}>{title}</h4>
            <p className={styles.sectionText}>{text}</p>
          </div>
        </>
      )}
    </div>
  );
}
