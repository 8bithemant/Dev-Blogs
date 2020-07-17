import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {articleListReducer, articleDetailsReducer} from './reducers/homeScreenReducer'

const reducer= combineReducers({

    articleList: articleListReducer,
    articleDetails: articleDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,  composeEnhancer(applyMiddleware(thunk)) );

export default store;