import { combineReducers, createStore } from "redux";
import items_reducer from "./reducers/Items-reducer";

let reducers = combineReducers({
    itemsPage: items_reducer
}); 

let store = createStore(reducers); 

export default store; 