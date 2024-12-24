export const ADD_ARTICLE = 'ADD_ARTICLE';

export const add_article = (article) => {
    return {
        type: ADD_ARTICLE,
        payload: article
    }
}