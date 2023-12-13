import React, { useState } from "react";
import styles from "./fontPreview.module.css";
import unicodeConverter from "./unicodeConverter";
import fontFamilies from "./fontFamilies";
import Alphabet from "../../components/alphabet/Alphabet";
import Symbols from "../../components/symbols/Sysmbols";
import Paragraph from "../../components/paragraph/Paragraph";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function FontPreview() {
  const [fontSize, setFontSize] = useState(44);
  const [text, setText] = useState("");
  const [selectedFamilyId, setSelectedFamilyId] = useState("0");

  const location = useLocation();
  const { font } = location.state;

  const handleFontSizeChange = (event) => {
    const newSize = event.target.value;
    setFontSize(newSize);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    const newConvertedText = unicodeConverter(newText);
    setText(newConvertedText);
    // localStorage.setItem("textInput", newConvertedText);
  };

  // Find the font family based on the selected family id
  const selectedFamily = fontFamilies.find(
    (family) => family.id === selectedFamilyId
  );

  // Use a fallback if no family is found
  const fontFamily = selectedFamily
    ? selectedFamily.name
    : "FM Abhaya, sans-serif";

  const handleFamilyChange = (event) => {
    setSelectedFamilyId(event.target.value);
  };

  const handleDownloadFont = () => {
    // Replace with font download logic
    alert("Font download functionality will be implemented here.");
  };

  return (
    <div className={styles.fontPreview}>
      <div className={styles.fontPreviewContainer}>
        <div className={styles.nameSection}>
          <span className={styles.fontName}>{font.name}</span>
          <Link to={font.downloadLink}>
            <button
              className={styles.downloadButton}
              // onClick={handleDownloadFont}
            >
              Download Font
            </button>
          </Link>
        </div>

        <div className={styles.previewBox}>
          <p style={{ fontSize: `${fontSize}px`, fontFamily: `${font.name}` }}>
            {text || "leu;s fohla ,shkak'"}
          </p>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.textInput}
              id="text-input"
              placeholder="Singlish වලින් ලියන්න..."
              //value={text}
              onChange={handleTextChange}
            />
          </div>

          <div className={styles.fontSizeSection}>
            <span className={styles.fontSizeValue}>{fontSize}px</span>
            <input
              type="range"
              className={styles.fontSize}
              id="font-size"
              min="10"
              max="100"
              value={fontSize}
              onChange={handleFontSizeChange}
            />
          </div>
        </div>

        {/* <label htmlFor="font-family-select">Select Font Family:</label>
        <select
          id="font-family-select"
          className={styles.fontFamilySelect}
          value={selectedFamilyId}
          onChange={handleFamilyChange}
        >
          {fontFamilies.map((family) => (
            <option key={family.id} value={family.id}>
              {family.name}
            </option>
          ))}
        </select> */}

        <dev className={styles.bodyContent}>
          <dev className={styles.alphabet}>
            <Alphabet fontFamily={font.name} />
            <Symbols fontFamily={font.name} />
          </dev>

          <dev className={styles.paragraph}>
            <Paragraph fontFamily={font.name} />
          </dev>
        </dev>
      </div>
    </div>
  );
}

export default FontPreview;
