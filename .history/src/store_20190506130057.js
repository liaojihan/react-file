import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducers from "./reducers/index"

const initialState = {}
const middleware = [thunk]

// 创建并初始化store
const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store