import { combineReducers } from "redux";
import orderReducer from "../Reducers/orderReducer";

const allReducers = combineReducers({
    order: orderReducer,
});

export default allReducers;
