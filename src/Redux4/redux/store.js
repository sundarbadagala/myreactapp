import { createStore } from "redux";

import { cakesReducer } from "./reducer";

const store = createStore(cakesReducer)

export default store