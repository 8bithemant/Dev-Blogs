

import axios from 'axios';
import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, ARTICLE_DETAILS_REQUEST, ARTICLE_DETAILS_SUCCESS, ARTICLE_DETAILS_FAIL  } from '../constants/banner';
import config from '../DevtoConfig'

const listArticles =()=> async(dispatch)=>{


    try{
        dispatch({type: ARTICLE_LIST_REQUEST});
        const {data}= await axios.get(`https://dev.to/api/articles?username=${config.userName}`)
        dispatch({type:ARTICLE_LIST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({type:ARTICLE_LIST_FAIL, payload:error.message})

    }
}



const detailsArticle = (articleSlug)=> async(dispatch)=>{

    try{

        dispatch({type:ARTICLE_DETAILS_REQUEST, payload:articleSlug})
        const {data}=await axios.get(`https://dev.to/api/articles/${config.userName}/${articleSlug}`)
        dispatch({type:ARTICLE_DETAILS_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:ARTICLE_DETAILS_FAIL, payload:error.message})

    }
}

export {listArticles, detailsArticle}