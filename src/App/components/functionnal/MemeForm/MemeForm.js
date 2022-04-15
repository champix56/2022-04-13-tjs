import React, { FC } from "react";
import styles from "./MemeForm.module.css";
import {useDispatch, useSelector} from 'react-redux'
import Button from "../../ui/Button/Button";
import { ACTIONS_CURRENT } from "../../../store/store";

const MemeForm = (props) => {
  const dispatch = useDispatch()
  function onFormValuesChanged(newMeme){
    dispatch({
      type: ACTIONS_CURRENT.UPDATE_CURRENT,
      value: newMeme,
    });
  }
  const images = useSelector(state => state.ressources.images)
  const meme = useSelector(state => state.current)
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" />
        <hr />
        <h2>Image</h2>
        <select  value={meme.imageId}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  imageId:parseInt( evt.target.value),
                });
              }}>
          <option value="-1">Aucune</option>
          {images.map((elem, index) => (
            <option key={`select-${index}`} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={meme.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            onFormValuesChanged({
              ...meme,
              text: evt.target.value,
            });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={meme.x}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  x: evt.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input type="number" className={styles.smallInput} value={meme.y}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  y: evt.target.value,
                });
              }} />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input type="color" id="f_color"  value={meme.color}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  color: evt.target.value,
                });
              }} />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input type="number" className={styles.smallInput}  value={meme.fontSize}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  fontSize: Number(evt.target.value),
                });
              }} />
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
              value={meme.fontWeight}
              onChange={(evt) => {
                console.log(evt.target.value);
                onFormValuesChanged({
                  ...meme,
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input id="f_underline" type="checkbox" checked={meme.underline}
              onChange={(evt) => {
                console.log(evt.target.checked);
                onFormValuesChanged({
                  ...meme,
                  underline: evt.target.checked,
                });
              }} />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input id="f_italic" type="checkbox" checked={meme.italic}
              onChange={(evt) => {
                console.log(evt.target.checked);
                onFormValuesChanged({
                  ...meme,
                  italic: evt.target.checked,
                });
              }} />
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
