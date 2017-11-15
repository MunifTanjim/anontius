import { NOTIFY } from './actionTypes'

export const notify = (show, info = '') => ({
  type: NOTIFY,
  info,
  show
})
