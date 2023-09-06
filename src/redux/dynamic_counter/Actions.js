import { DIINCREMENT, DIDECREMENT } from "./ActionTypes";

export const diIncrement = (value) => {
    return{
        type: DIINCREMENT,
        payload: value,
    }
};

export const diDecrement = (value) => {
    return{
        type: DIDECREMENT,
        payload: value,
    }
}
