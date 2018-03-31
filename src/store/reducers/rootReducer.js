import { combineReducers } from 'redux'

import { entriesBySectionReducer as entriesBySection } from './entriesBySectionReducer'
import { notificationReducer as notification } from './notificationReducer'
import { userReducer as user } from './userReducer'
import { i18nReducer as i18n } from './i18nReducer'

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
  user,
  i18n
})
