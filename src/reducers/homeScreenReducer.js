import { ARTICLE_LIST_SUCCESS, ARTICLE_LIST_REQUEST, ARTICLE_LIST_FAIL,ARTICLE_DETAILS_REQUEST,ARTICLE_DETAILS_SUCCESS, ARTICLE_DETAILS_FAIL } from '../constants/banner'



function articleListReducer(state={articles:[]}, action){


    switch(action.type){
      case ARTICLE_LIST_REQUEST:
          return {loading: true}
      case ARTICLE_LIST_SUCCESS:
          return {loading: false, articles: action.payload}
      case ARTICLE_LIST_FAIL:
          return {loading: false, error:action.payload}
      default:
          return state
    }
}



function articleDetailsReducer(state={articles:[]}, action){


    switch(action.type){
      case ARTICLE_DETAILS_REQUEST:
          return {loading: true}
      case ARTICLE_DETAILS_SUCCESS:
          return {loading: false, articles: action.payload}
      case ARTICLE_DETAILS_FAIL:
          return {loading: false, error:action.payload}
      default:
          return state
    }
}





export {articleListReducer, articleDetailsReducer}