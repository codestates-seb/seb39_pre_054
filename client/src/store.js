import {createStore} from "redux"
import rootReducer from "../src/reducer/index"

const store = createStore(rootReducer)

export default store