// NOTE: it is a reducer
import * as ActionTypes from './ActionTypes'

const promosInitState = {
  isLoading: false,
  errMess: null,
  promotions: []
}

export const Promotions = (state=promosInitState, action) => {

  switch(action.type){

    case ActionTypes.PROMOS_LOADING:
      return {...state, isLoading: true, errMess: null, promotions: []}

    case ActionTypes.ADD_PROMOS:
      return {...state, isLoading: false, promotions: action.payload}

    case ActionTypes.PROMOS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, promotions: []}
      
    default: return state
  }
}