import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducer";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    users: usersReducer
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store