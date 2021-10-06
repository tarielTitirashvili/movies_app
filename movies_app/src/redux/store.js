import { createStore, combineReducers, applyMiddleware , compose} from "redux"
import thunk from 'redux-thunk'
import moviesReducer from "./reducers/moviesReducer"

let reducers = combineReducers(
    {
       moviesReducer: moviesReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store