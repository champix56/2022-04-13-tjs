import { createStore } from "redux";

const initialState = {
  images: [],
};
function ressourcesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_IMAGES":
      return { ...state, images: action.values };
    case "ADD_IMAGE":
      return { ...state, images: [...state.images, action.value] };
    default:
      return state;
  }
}
export const store = createStore(ressourcesReducer);
store.subscribe(() => {
  console.log(store.getState());
});