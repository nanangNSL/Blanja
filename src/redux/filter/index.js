import * as Type from "./type";

const initialState = {
  click: false
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_CLICK:
      return { ...state,  click: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";