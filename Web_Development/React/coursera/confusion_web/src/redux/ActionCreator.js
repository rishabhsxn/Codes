import * as ActionTypes from './ActionTypes'
import fetch from 'cross-fetch'
import { baseUrl } from '../shared/baseUrl'

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }

  newComment.date = new Date().toISOString()

  return fetch(baseUrl+'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
  .then( response=>{
    if(response.ok){
      return response
    }
    else{
      var error = new Error('Error ' + response.status + ': ' + response.statusText)
      error.response = response
      throw error
    }
  }, error=>{
    var errmess = new Error(error.message)
    throw errmess
  })
  .then( response=> response.json() )
  .then( comment => dispatch(addComment(comment)) )
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
  
}

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
})

//NOTE: this works as thunk, it dispatches multiple actions
//REVIEW: how and when this function is called? - SOLUTION: in mapDispatchToProps in mainComponent, and called in it's componentDidMount()
export const fetchDishes = () => (dispatch) => {   

  dispatch(dishesLoading(true)) 
  //REVIEW: why true is passed to dishesLoading when it doesn't receive any arguments in the definition

  return fetch(baseUrl+'dishes')
  .then( response => {
    if(response.ok){
      return response
    }
    else{
      var error = new Error('Error'+ response.status + ':' + response.statusText)
      error.response = response
      throw error
    }
  }, error => {
    var errmess = new Error(error.message)
    throw errmess
  })
  .then( response => response.json() )
  .then( dishes => dispatch(addDishes(dishes)))
  .catch( error => dispatch(dishesFailed(error.message)) )
}

// this is an actionCreator for DISHES_LOADING
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
})
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
})
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
})



export const fetchComments = () => (dispatch) => {

  return fetch(baseUrl+'comments')
  .then( response => {
    if(response.ok){
      return response
    }
    else{
      var error = new Error('Error'+ response.status + ':' + response.statusText)
      error.response = response
      throw error
    }
  }, error => {
    var errmess = new Error(error.message)
    throw errmess
  })
  .then( response => response.json() )
  .then( comments => dispatch(addComments(comments)) )
  .catch( error => dispatch(commentsFailed(error.message)) )
}

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})
export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
})



export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading(true)) 

  return fetch(baseUrl+'promotions')
  .then( response => {
    if(response.ok){
      return response
    }
    else{
      var error = new Error('Error'+ response.status + ':' + response.statusText)
      error.response = response
      throw error
    }
  }, error => {
    var errmess = new Error(error.message)
    throw errmess
  })
  .then( response => response.json() )
  .then( promos => dispatch(addPromos(promos)))
  .catch( error => dispatch(promosFailed(error.message)) )
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
}) 
export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
})
export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
})


export const fetchLeaders = () => (dispatch) => {

  dispatch(leadersLoading(true))

  return fetch(baseUrl+'leaders')
  .then( response => {
    if(response.ok){
      return response
    }
    else{
      var error = new Error('Error: '+response.status+' : '+response.statusText)
      error.response = response
      throw error
    }
  }, error => {
    var errmess = new Error(error.message)
    throw errmess
  } )

  .then( response => response.json() )
  .then( leaders => dispatch(addLeaders(leaders)) )
  .catch( error => dispatch(leadersFailed(error.message)) )

}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
})
export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
})
export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
})



export const postFeedback = (feedback) => (dispatch) => {
  const newFeedback = Object.assign({ date: new Date().toISOString() }, feedback);
  
  return fetch(baseUrl + 'feedback', {
    method: 'POST',
    body: JSON.stringify(newFeedback),
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
    error => {
      var errorMessage = new Error(error.errorMessage);
      throw errorMessage;
    }
  )
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error => {
    console.log('Post feedback: ' + error.message);
    alert('Feedback could not be posted:\n' + error.message)
  })
};