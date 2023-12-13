import styles from "./fontsPage.module.css";
import FontCard from "../../components/fontCard/FontCard";
import unicodeConverter from "./unicodeConverter";
import fontFamilies from "./fontFamilies";
import ShowcaseImages from "./showcaseImages";
import FontsShowcase from "../../components/fontsShowcase/FontsShowcase";
import { useState } from "react";
import { Link } from "react-router-dom";

function FontsPage() {
  const [query, setQuery] = useState("");
  const [fontSize, setFontSize] = useState(32);
  const [textInput, setText] = useState("");

  const keys = ["id", "name"];

  const search = (data) => {
    return fontFamilies.filter((font) =>
      keys.some((key) => font[key].toLowerCase().includes(data.toLowerCase()))
    );
  };

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

  return (
    <div className={styles.fontsPage}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerGroup}>
            <div className={styles.logo}>Akuru</div>
            <div className={styles.fontsSearch}>
              <input
                type="text"
                className={styles.searchInput}
                id="search-input"
                placeholder="Search Fonts"
                //value={text}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fontsShowcase}>
        <FontsShowcase showcaseImages={ShowcaseImages} />
      </div>

      <div className={styles.fontsPageContainer}>
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

        {/* {fontFamilies.map((font, index) => (
          <Link to={`/fonts/${font.id}/${font.name}`}>
            <FontCard
              key={index}
              fontFamily={font.name}
              textInput={textInput}
              fontSize={fontSize}
            />
          </Link>
        ))} */}

        {search(query).map((font, index) => (
          <Link
            key={index}
            to={`/fonts/${font.name}`}
            state={{ font }} // Pass the font object directly as state
          >
            <FontCard
              key={index}
              fontFamily={font.name}
              textInput={textInput}
              fontSize={fontSize}
              link={font.downloadLink}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FontsPage;
