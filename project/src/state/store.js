import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createMiddleware} from 'redux-api-middleware';
import epReducers from './ducks/episodes/reducers'
import entitiesReducers from './ducks/entities'
import charactersReducers from './ducks/characters/reducers'

const rootReducer = combineReducers({...epReducers, ...entitiesReducers, ...charactersReducers})


const store = createStore(rootReducer, applyMiddleware(thunk, createMiddleware(), logger))

export default store;