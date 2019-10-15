import { INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../../actions/actionsTypes';
import { stat } from 'fs';

const postsInitialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

export const posts = (state = postsInitialState, action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        default:
            return state;
    }
}

//on the request posts, i think the sintaxis is bad
//it should be only action.subreddit without the brackets

export const postsBySubreddit = (state = {}, action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS: 
            return {
                ...state,
                [action.subreddit]: posts([action.subreddit], action)
            }
        default:
            return state;
    }
}