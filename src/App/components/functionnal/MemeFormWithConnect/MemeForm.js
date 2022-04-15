import React, { FC } from "react";
import styles from "./MemeForm.module.css";
import {connect} from 'react-redux'
import Button from "../../ui/Button/Button";
import { ACTIONS_CURRENT, store } from "../../../store/store";
import { useParams, useMatch } from 'react-router-dom'

const MemeForm = (props) => {
  let routeParams=useParams();

  console.log(routeParams);
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" />
        <hr />
        <h2>Image</h2>
        <select  value={props.meme.imageId}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
                  imageId:parseInt( evt.target.value),
                });
              }}>
          <option value="-1">Aucune</option>
          {props.images.map((elem, index) => (
            <option key={`select-${index}`} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onFormValuesChanged({
              ...props.meme,
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
              value={props.meme.x}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
                  x: evt.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input type="number" className={styles.smallInput} value={props.meme.y}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
                  y: evt.target.value,
                });
              }} />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input type="color" id="f_color"  value={props.meme.color}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
                  color: evt.target.value,
                });
              }} />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input type="number" className={styles.smallInput}  value={props.meme.fontSize}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
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
              value={props.meme.fontWeight}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onFormValuesChanged({
                  ...props.meme,
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
            <input id="f_underline" type="checkbox" checked={props.meme.underline}
              onChange={(evt) => {
                console.log(evt.target.checked);
                props.onFormValuesChanged({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }} />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input id="f_italic" type="checkbox" checked={props.meme.italic}
              onChange={(evt) => {
                console.log(evt.target.checked);
                props.onFormValuesChanged({
                  ...props.meme,
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
export const unconnectedMemeForm = MemeForm;

function mapStateToProps(storeState,ownProps) {
  return {
    //props fournis par le parent 
    ...ownProps,
    images:storeState.ressources.images,
    meme:storeState.current
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onFormValuesChanged:(newMeme)=>{
      dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: newMeme,
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemeForm)