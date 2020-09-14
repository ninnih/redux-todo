import { ADD_ARTICLE } from '../constants/index';

export const addArticle = payload => {
    return {
        type: ADD_ARTICLE,
        payload
    }
}
