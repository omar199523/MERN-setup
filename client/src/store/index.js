import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reduser";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

// set middlewere thunk and router middlewere.
const middleware = [thunk,routerMiddleware(history)]
// set initial state .
const initialState ={}

// set redux dev tool when enveromint


const newCompose = compose(
  applyMiddleware(
    ...middleware
  ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
  
)
const store = createStore(
  rootReducer(history), // root reducer with router state
  initialState,
  newCompose,
)
export default store



