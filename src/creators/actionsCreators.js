import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER , DELETE_TODO} from '../actions/actionsTypes';

//Adds a new todo
let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        index
    }
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index
    }
}

export const setVisiblityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}