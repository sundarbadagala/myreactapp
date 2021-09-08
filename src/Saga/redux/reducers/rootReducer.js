import { combineReducers } from "redux";
import { mobileReducer } from "./mobileReducer";
import { userReducer} from "./userReducer";
import { dataReducer } from "./dataReducer";
import { todoReducer } from "./todoReducer";

const rootReducer=combineReducers({
    mobiles: mobileReducer,
    users: userReducer,
    data: dataReducer,
    todo: todoReducer
})

export default rootReducer