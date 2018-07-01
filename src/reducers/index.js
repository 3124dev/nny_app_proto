import { FETCH_LECTURES, FETCH_LECTURE } from '../actions'
import { CHECK_AUTH, PUT_AUTH } from '../actions'
import { combineReducers } from 'redux'

const fetcher = (state = { all: [], current: {} }, action) => {
  switch (action.type) {
    case FETCH_LECTURES:
      return Object.assign({}, state, {
        all: action.all
      })
    case FETCH_LECTURE:
      return Object.assign({}, state, {
        current: action.item
      })
    default:
      return state
  }
}

const authenticate = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      return Object.assign({}, state, {
        isAuth: state.isAuth
      })
    case PUT_AUTH:
      return Object.assign({}, state, {
        isAuth: action.isAuth
      })
    default:
      return state
  }
}

const reducers = combineReducers({
  fetcher,
  authenticate
})

export default reducers