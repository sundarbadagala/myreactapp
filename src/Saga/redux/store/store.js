import { applyMiddleware, combineReducers, createStore } from "redux";
import { mobileReducer } from "../reducer/mobileReducer";
import createSagaMiddleware from "@redux-saga/core";
import { watchMobile } from "../saga/mobileSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer= combineReducers({
    mobiles: mobileReducer
})

const store= createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchMobile)

export default store