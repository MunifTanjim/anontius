import { NOTIFY } from '../actions/actionTypes'

export const notificationReducer = (
  state = {
    info: '',
    show: false
  },
  action
) => {
  switch (action.type) {
    case NOTIFY:
      let { info, show } = action
      return {
        info,
        show
      }
    default:
      return state
  }
}
