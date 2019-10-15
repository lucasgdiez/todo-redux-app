import { ADD_TODO, 
        TOGGLE_TODO, 
        SET_VISIBILITY_FILTER , 
        DELETE_TODO, 
        SELECT_SUBREDDIT,
        INVALIDATE_SUBREDDIT,
        REQUEST_POSTS,
        RECEIVE_POSTS
} from '../actions/actionsTypes';

//Adds a new todo
let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
};

//Toggles the current state of the todo to the !==
export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        index
    }
};

//WIP feature
export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index
    }
}

//Sets what todos to render
export const setVisiblityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

//Selects a subreddit
export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

//Invalidates selected subreddit
export const invalidateSubreddit = (subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

//Performs requests to the Reddit API
export const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

//Action performed when posts are received
export const receivePosts = (subreddit, json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}