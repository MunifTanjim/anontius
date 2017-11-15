import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

let middleWares = [applyMiddleware(thunkMiddleware)]
window.__REDUX_DEVTOOLS_EXTENSION__ &&
  middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, compose(...middleWares))

export default store
