import { combineReducers } from 'redux'

import { entriesBySectionReducer as entriesBySection } from './entriesBySectionReducer'
import { notificationReducer as notification } from './notificationReducer'
import { userReducer as user } from './userReducer'

export const initialSectionStruct = {
  isUpdating: false,
  entries: {
    keys: [],
    list: {}
  }
}

export const rootReducer = combineReducers({
  entriesBySection,
  notification,
  user
})
