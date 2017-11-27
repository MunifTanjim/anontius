import { store } from '../store'
import { syncSnapshotSubscribe } from '../utils/firebaseAPI'

import {
  SYNC_ENTRIES_REQUEST,
  SYNC_ENTRIES_SUCCESS,
  SYNC_ENTRIES_FAILURE
} from './actionTypes'

const syncEntriesRequest = section => ({
  type: SYNC_ENTRIES_REQUEST,
  section
})

const syncEntriesSuccess = (section, snapshot) => ({
  type: SYNC_ENTRIES_SUCCESS,
  section,
  snapshot
})

const syncEntriesFailure = (section, err) => {
  console.error(err)
  return {
    type: SYNC_ENTRIES_FAILURE,
    section
  }
}

export const syncSnapshot = section => dispatch => {
  let startKey = store.getState().entriesBySection[section].entries.keys[0]

  return syncSnapshotSubscribe(
    section,
    startKey,
    section => dispatch(syncEntriesRequest(section)),
    (section, snapshot) => dispatch(syncEntriesSuccess(section, snapshot)),
    (section, err) => dispatch(syncEntriesFailure(section, err))
  )
}
