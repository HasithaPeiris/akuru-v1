import { useState } from "react";
import styles from "./paragraph.module.css";

function Paragraph({ fontFamily }) {
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState("normal");

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value, 10));
  };

  const handleFontWeightChange = (event) => {
    setFontWeight(event.target.value);
  };

  return (
    <div className={styles.paragraph}>
      <div className={styles.paraContainer}>
        <label htmlFor="fontSizeSelector">Select Font Size:</label>
        <select
          id="fontSizeSelector"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value={12}>12px</option>
          <option value={16}>16px</option>
          <option value={20}>20px</option>
          <option value={24}>24px</option>
          <option value={28}>28px</option>
          <option value={32}>32px</option>
        </select>

        <label htmlFor="fontWeightSelector">Select Font Weight:</label>
        <select
          id="fontWeightSelector"
          value={fontWeight}
          onChange={handleFontWeightChange}
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
        </select>

        <div className={styles.para}>
          <p
            style={{
              fontFamily: `${fontFamily}`,
              fontSize: `${fontSize}px`,
              fontWeight,
            }}
          >
            ;jo hï mqoa.,hl= wh;ajk rfÜ foaYmd,k" kS;suh fyda cd;Hka;r ;;a;ajhka
            lsisÿ úfYaIhla o ta rfÜ iajdëk" Ndrldr" wiajdëk wd§ ljr ;;a;ajhla
            úfYaIhla o fkdue;sj fï ysñlï Tyq i;= jkafkah¡ iEu mqoa.,fhl=gu
            Ôj;aùug;a ksoyiaj is;Sug;a fm!oa.,sl wdrlaIdjg;a ysñlï we;af;ah¡
            lsisu mqoa.,fhl= jy,a lfuys fyda nkaOkfhys ^odi;ajfhys& fkd/|úh
            hq;=h¡ iEu wdldrhlu jy,a yd jy,alu ;ykï jkafkah¡ lsisu mqoa.,hl= jO
            ysxidjg fyda lDDr" wudkqIsl my;a fyda oඬqjulg fyda Ndckh fkdl hq;=h¡
          </p>
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
