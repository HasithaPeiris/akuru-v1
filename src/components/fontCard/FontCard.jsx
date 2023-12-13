import { useState } from "react";
import styles from "./fontCard.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

function FontCard({ fontFamily, textInput, fontSize, link }) {
  return (
    <div className={styles.fontCard}>
      <span className={styles.fontName}>{fontFamily}</span>
      <div className={styles.fontPreview}>
        <span
          style={{ fontSize: `${fontSize}px`, fontFamily: `${fontFamily}` }}
        >
          {textInput || "leu;s fohla ,shkak'"}
        </span>
      </div>

      <div className={styles.button}>
        <DownloadIcon className={styles.buttonIcon} />
      </div>
    </div>
  );
}

export default FontCard;
