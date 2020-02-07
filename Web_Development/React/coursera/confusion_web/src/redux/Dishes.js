// NOTE: it is a reducer

import * as ActionTypes from './ActionTypes'
//removed because now the action brings in the DISHES as payload
// import { DISHES } from '../shared/dishes';

const dishesInitState = {
  isLoading: false,
  errMess: null,
  dishes: []
}

export const Dishes = (state = dishesInitState, action) => {
  switch(action.type){

    case ActionTypes.DISHES_LOADING:
      return {...state, isLoading: true, errMess: null, dishes: []}
    
    case ActionTypes.DISHES_FAILED:
      return {...state, isLoading: false, errMess: action.payload}

    case ActionTypes.ADD_DISHES:
      return {...state, isLoading: false, errMess: null, dishes: action.payload}
    
    default:
      return state
  }
}