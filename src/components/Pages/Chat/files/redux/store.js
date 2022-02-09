import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users:userReducer
})


const store= createStore(rootReducer, applyMiddleware(thunk))

export default store