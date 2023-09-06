import { combineReducers } from "redux";
import counterReducer from "./counter/CounterReducer";
import dynamicCounterReducer from "./dynamic_counter/DynamicCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
});

export default rootReducer;