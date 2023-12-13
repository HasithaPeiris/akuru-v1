import React from "react";
import styles from "./fontsShowcase.module.css";

function FontsShowcase({ showcaseImages }) {
  return (
    <div className={styles.ShowcaseContainer}>
      <div className={styles.ShowcaseImages}>
        {showcaseImages.map((image, index) => (
          <img
            className={styles.showcaseImage}
            key={index}
            src={image}
            alt={`Font ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FontsShowcase;
