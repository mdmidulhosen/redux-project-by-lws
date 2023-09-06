import { DIINCREMENT, DIDECREMENT } from "./ActionTypes";
const initialState = {
  value: 0,
};
const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DIDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default dynamicCounterReducer;