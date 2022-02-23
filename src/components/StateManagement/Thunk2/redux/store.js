import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import fetchUserReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer=combineReducers({
    products : fetchUserReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store