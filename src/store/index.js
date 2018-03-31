import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import throttle from 'lodash.throttle'

import { loadState, saveState } from '../utils/localStorage'
import { initialSectionStruct, rootReducer } from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWares = []
middleWares.push(thunkMiddleware)

const persistedState = loadState()

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleWares))
)

export const dispatchToStore = store.dispatch

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
