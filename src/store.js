import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import throttle from 'lodash.throttle'
import { loadState, saveState } from './utils/localStorage'
import { initialSectionStruct, rootReducer } from './reducers/rootReducer'

const middleWares = [applyMiddleware(thunkMiddleware)]
window.__REDUX_DEVTOOLS_EXTENSION__ &&
  middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const persistedState = loadState()

export const store = createStore(
  rootReducer,
  persistedState,
  compose(...middleWares)
)

store.subscribe(
  throttle(() => {
    let { user, entriesBySection } = store.getState()
    saveState({
      user: { ...user },
      entriesBySection: {
        messages: { ...initialSectionStruct },
        replies: { ...entriesBySection.replies }
      }
    })
  }, 1000)
)
