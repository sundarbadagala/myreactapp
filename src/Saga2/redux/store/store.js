import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "../reducer/usersReducer";
import createSagaMiddleware from "@redux-saga/core";
import { watchUsers } from "../sagas/usersSaga";

const rootReducer= combineReducers({
    users: usersReducer
})

const sagaMiddleware= createSagaMiddleware()

const store= createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchUsers)

export default store