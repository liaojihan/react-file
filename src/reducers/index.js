import { combineReducers } from "redux";
import menuReducer from "./menuReducer"
import userReducer from './userReducer'

// 集成所有reducer
const rootReducers = combineReducers({
    menu: menuReducer,
    user: userReducer
})

export default rootReducers