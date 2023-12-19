import React, { useEffect, useRef, useState } from "react";
import styles from "./fontPreview.module.css";
import unicodeConverter from "../unicodeConverter";
import Alphabet from "../../components/alphabet/Alphabet";
import Symbols from "../../components/symbols/Sysmbols";
import Paragraph from "../../components/paragraph/Paragraph";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function FontPreview() {
  const [fontSize, setFontSize] = useState(44);
  const [text, setText] = useState("");

  const textInputRef = useRef(null);

  const location = useLocation();
  const { font } = location.state;

  const handleDownloadFont = (fontFile, fontName) => {
    const link = document.createElement("a");
    link.href = fontFile;
    link.download = `${fontName.replace(/\s+/g, "-")}.ttf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFontSizeChange = (event) => {
    const newSize = event.target.value;
    setFontSize(newSize);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    const newConvertedText = unicodeConverter(newText);
    setText(newConvertedText);

    localStorage.setItem("textInput", newConvertedText);
    localStorage.setItem("input", newText);
  };

  useEffect(() => {
    const savedTextInput = localStorage.getItem("textInput");
    const savedInput = localStorage.getItem("input");

    if (savedTextInput) {
      setText(savedTextInput);

      if (textInputRef.current) {
        textInputRef.current.value = savedInput;
      }
    }
  }, []);

  return (
    <div className={styles.fontPreview}>
      <div className={styles.fontPreviewContainer}>
        <div className={styles.nameSection}>
          <span className={styles.fontName}>{font.family}</span>

          <button
            className={styles.downloadButton}
            onClick={() => handleDownloadFont(font.fontFile, font.family)}
          >
            Download Font
          </button>
        </div>

        <div className={styles.previewBox}>
          <p
            style={{ fontSize: `${fontSize}px`, fontFamily: `${font.family}` }}
          >
            {text || "leu;s fohla ,shkak'"}
          </p>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputBox}>
            <input
              type="text"
              className={styles.textInput}
              id="text-input"
              placeholder="කැමති දෙයක් ලියන්න..."
              ref={textInputRef}
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
            <Alphabet fontFamily={font.family} />
            <Symbols fontFamily={font.family} />
          </dev>

          <dev className={styles.paragraph}>
            <Paragraph fontFamily={font.family} />
          </dev>
        </dev>
      </div>
    </div>
  );
}

export default FontPreview;
