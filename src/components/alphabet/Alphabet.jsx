import Styles from "./alphabet.module.css";

function Alphabet({ fontFamily }) {
  return (
    <div className={Styles.alphabet}>
      <div className={Styles.table}>
        <table style={{ fontFamily: `${fontFamily}` }}>
          <tr>
            <td>w</td>
            <td>wd</td>
            <td>we</td>
            <td>wE</td>
            <td>b</td>
            <td>B</td>
          </tr>
          <tr>
            <td>W</td>
            <td>W!</td>
            <td>R</td>
            <td>t</td>
            <td>ta</td>
            <td>ft</td>
          </tr>
          <tr>
            <td>T</td>
            <td>´</td>
            <td>T!</td>
            <td>wx</td>
            <td>w#</td>
            <td></td>
          </tr>
          <tr>
            <td>l</td>
            <td>L</td>
            <td>.</td>
            <td>-</td>
            <td>-</td>
            <td>Õ</td>
          </tr>
          <tr>
            <td>p</td>
            <td>P</td>
            <td>c</td>
            <td>CO</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>g</td>
            <td>G</td>
            <td>v</td>
            <td>V</td>
            <td>K</td>
            <td>-</td>
          </tr>
          <tr>
            <td>;</td>
            <td>:</td>
            <td>o</td>
            <td>O</td>
            <td>k</td>
            <td>|</td>
          </tr>
          <tr>
            <td>m</td>
            <td>M</td>
            <td>n</td>
            <td>N</td>
            <td>u</td>
            <td>U</td>
          </tr>
          <tr>
            <td>h</td>
            <td>r</td>
            <td>,</td>
            <td>j</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Y</td>
            <td>I</td>
            <td>i</td>
            <td>y</td>
            <td>-</td>
            <td>*</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Alphabet;
