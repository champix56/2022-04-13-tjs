import { createStore, combineReducers } from "redux";
import { DummyMeme } from "../interfaces/common";
const REST_ADR_BASE = "http://localhost:7956";
const initialState = {
  images: [],
  memes: [],
};
export const ACTIONS_RESSOURCES = Object.freeze({
  ADD_IMAGES: "ADD_IMAGES",
  ADD_ALL_RESSOURCES: "ADD_ALL_RESSOURCES",
  ADD_IMAGE: "ADD_IMAGE",
});
function ressourcesReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS_RESSOURCES.ADD_ALL_RESSOURCES:
      return { ...state, images: action.values[0], memes:action.values[1] };
    case ACTIONS_RESSOURCES.ADD_IMAGES:
      return { ...state, images: action.values };
    case ACTIONS_RESSOURCES.ADD_IMAGE:
      return { ...state, images: [...state.images, action.value] };
    case "INIT_RESSOURCES":
      // requete async avec resolution d'execution de tache une fois achevée
      const promiseimg = fetch(`${REST_ADR_BASE}/images`).then((f) => f.json());
      const promisememe = fetch(`${REST_ADR_BASE}/memes`).then((f) => f.json());
      //synchronisation de deux executions
      Promise.all([promiseimg,promisememe]).then((arr_arr) => {
        store.dispatch({ type: ACTIONS_RESSOURCES.ADD_ALL_RESSOURCES, values: arr_arr });
        return arr_arr;
      });
      //retour de l'etat non touché car action async
      return state;
    default:
      return state;
  }
}
// section de gestion de l'etat du meme courrant independant des ressources
export const ACTIONS_CURRENT = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
});
const currentInitialState = DummyMeme;
function currentReducer(state = currentInitialState, action) {
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...action.value };
    default:
      return state;
  }
}
const reducersCombined = combineReducers({
  ressources: ressourcesReducer,
  current: currentReducer,
});
export const store = createStore(reducersCombined);
store.dispatch({ type: "INIT_RESSOURCES" });
store.subscribe(() => {
  console.log(store.getState());
});
