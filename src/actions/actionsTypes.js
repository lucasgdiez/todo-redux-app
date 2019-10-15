
//Adds todo
export const ADD_TODO = 'ADD_TODO';

//Toggles completion of todo
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const DELETE_TODO = 'DELETE_TODO';

//Sets visibility
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//Visibility Filters Types
const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETE = 'SHOW_COMPLETED';
const SHOW_ACTIVE = 'SHOW_ACTIVE';

export const visibilityFilters = {
    SHOW_ALL,
    SHOW_COMPLETE,
    SHOW_ACTIVE
}

//Sets subreddit
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

//Invalidates when pushing refresh
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

//Performs request to the Reddit API
export const REQUEST_POSTS = 'REQUEST_POSTS';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';