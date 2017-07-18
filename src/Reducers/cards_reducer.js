import {
  DID_GET_CARDS,
  DID_GET_CARD,
  DID_CREATE_CARD,
  DID_DELETE_CARD
} from '../action_types'

export default function (state = [], action) {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case DID_GET_CARD:
    case DID_GET_CARDS:
      console.log('reducer for get cards', action)
      return [...state, ...action.payload]
    default:
      return state
  }
}
