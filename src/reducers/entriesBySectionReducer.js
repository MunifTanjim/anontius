import { initialSectionStruct } from './rootReducer'

import {
  SYNC_ENTRIES_REQUEST,
  SYNC_ENTRIES_SUCCESS,
  SYNC_ENTRIES_FAILURE
} from '../actions/actionTypes'

const entriesReducer = (state, action) => {
  switch (action.type) {
    case SYNC_ENTRIES_SUCCESS:
      let newEntries = action.snapshot.val()
      let newKeys = newEntries
        ? Object.keys(newEntries)
            .filter(key => !~state.keys.indexOf(key))
            .reverse()
        : []

      return {
        keys: [...newKeys, ...state.keys],
        list: { ...state.list, ...newEntries }
      }
    default:
      return state
  }
}

const sectionReducer = (state, action) => {
  switch (action.type) {
    case SYNC_ENTRIES_REQUEST:
      return {
        ...state,
        isUpdating: true
      }
    case SYNC_ENTRIES_FAILURE:
      return {
        ...state,
        isUpdating: false
      }
    case SYNC_ENTRIES_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        entries: entriesReducer(state.entries, action)
      }
    default:
      return state
  }
}

export const entriesBySectionReducer = (
  state = {
    messages: { ...initialSectionStruct },
    replies: { ...initialSectionStruct }
  },
  action
) => {
  switch (action.type) {
    case SYNC_ENTRIES_REQUEST:
    case SYNC_ENTRIES_FAILURE:
    case SYNC_ENTRIES_SUCCESS:
      return {
        ...state,
        [action.section]: sectionReducer(state[action.section], action)
      }
    default:
      return state
  }
}
