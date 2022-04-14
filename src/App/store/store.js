import { createStore } from "redux";

const initialState = {
  images: [],
};
export const ACTIONS_RESSOURCES = Object.freeze({
  ADD_IMAGES: "ADD_IMAGES",
  ADD_IMAGE: "ADD_IMAGE",
});
function ressourcesReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_RESSOURCES.ADD_IMAGES:
      return { ...state, images: action.values };
    case ACTIONS_RESSOURCES.ADD_IMAGE:
      return { ...state, images: [...state.images, action.value] };
    default:
      return state;
  }
}
export const store = createStore(ressourcesReducer);
store.subscribe(() => {
  console.log(store.getState());
});
