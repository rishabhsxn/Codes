import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Dishes } from './Dishes'
import { Comments } from './Comments'
import { Promotions } from './Promotions'
import { Leaders } from './Leaders'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  )

  return store
}

