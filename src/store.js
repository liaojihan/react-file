import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducers from "./reducers/index"

const initialState = {}

// 创建并初始化store
const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store