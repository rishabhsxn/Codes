// NOTE: it is a reducer

import * as ActionTypes from './ActionTypes'

const commentsInitState = {
  errMess: null,
  comments: []
}

export const Comments = (state=commentsInitState, action) => {

  switch(action.type){
    
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload
      return {...state, comments: state.comments.concat(comment)}

    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload}

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload, comments: []}

    default: 
      return state
  }
}