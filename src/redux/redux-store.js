import { combineReducers, createStore, applyMiddleware } from "redux";
import items_reducer from "./reducers/Items-reducer";
import thunkMiddleWare from "redux-thunk"; 

let reducers = combineReducers({
    itemsPage: items_reducer
}); 

let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); 

export default store; 