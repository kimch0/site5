export default function CraftSection({
  number,
  title,
  text,
  image,
  imagePosition = "right",
}) {
  return (
    <div className={`${styles.section} ${styles.dividerBorder}`}>
      <h3 className={styles.sectionNumber}>{number}</h3>

      <div>
        <h4 className={styles.sectionTitle}>{title}</h4>
        <p className={styles.sectionText}>{text}</p>
      </div>

      <div
        className={`${styles.imageContainer} ${
          styles[`image-${imagePosition}`]
        }`}
      >
        <Image src={image} alt={title} fill className={styles.sectionImage} />
      </div>
    </div>
  );
}
