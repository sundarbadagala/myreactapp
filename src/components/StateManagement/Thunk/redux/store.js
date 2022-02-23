import { applyMiddleware, combineReducers, createStore } from "redux";
import fetchProductsReducer from "./reducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    products: fetchProductsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store