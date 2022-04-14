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
// let state = ressourcesReducer(undefined, {
//   type: "ADD_IMAGES",
//   values: [
//     {
//       id: 0,
//       url: "futurama_slurm.jpg",
//       w: 600,
//       h: 315,
//       name: "futurama slurm",
//     },
//     {
//       id: 1,
//       url: "futurama_matrix.webp",
//       w: 1280,
//       h: 720,
//       name: "futurama matrix",
//     },
//   ],
// });

// state=ressourcesReducer(state,{
//     type:'ADD_IMAGE',
//     value:{
//         id:123,
//         url:'hello.jsph'
//     }
// });

export const store = createStore(ressourcesReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD_IMAGES",
  values: [
    {
      id: 0,
      url: "futurama_slurm.jpg",
      w: 600,
      h: 315,
      name: "futurama slurm",
    },
    {
      id: 1,
      url: "futurama_matrix.webp",
      w: 1280,
      h: 720,
      name: "futurama matrix",
    },
  ],
});

store.dispatch({
  type: "ADD_IMAGE",
  value: {
    id: 123,
    url: "hello.jsph",
  },
});
