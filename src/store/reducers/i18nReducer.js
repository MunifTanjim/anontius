import { CHANGE_LANGUAGE } from '../actions/actionTypes'

export const i18nReducer = (state = { lang: 'en' }, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.lang
      }
    default:
      return state
  }
}
