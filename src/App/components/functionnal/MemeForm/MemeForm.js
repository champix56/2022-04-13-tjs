import React, { FC } from "react";
import styles from "./MemeForm.module.css";

import Button from "../../ui/Button/Button";

const MemeForm= (props) => {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" />
        <hr />
        <h2>Image</h2>
        <select>
          <option value="-1">Aucune</option>
          {
            props.images.map((elem,index)=><option key={`select-${index}`} value={elem.id}>{elem.name}</option>)
          }
        </select>
        <hr />
        <h2>text</h2>
        <input type="text"  /> 
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input type="number" className={styles.smallInput} />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input type="number" className={styles.smallInput} />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input type="color" id="f_color"  />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input type="number" className={styles.smallInput} />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min="100"
              step="100"
              max="900"
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
            />
          </div>
        </div>
        <div className={styles.half}>
          <Button type="reset" bgColor="tomato">
            clear
          </Button>
          <Button type="submit" bgColor="skyblue">
            save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;