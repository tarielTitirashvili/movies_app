import { createStore, combineReducers, applyMiddleware , compose} from "redux"
import thunk from 'redux-thunk'
import moviesReducer from "./reducers/moviesReducer"
import moviePageReducer from "./reducers/moviePageReducer"
import showPicturesReducer from './reducers/showPicturesReducer'

let reducers = combineReducers(
    {
       moviesReducer: moviesReducer,
       moviePage: moviePageReducer,
       pictures: showPicturesReducer,
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store