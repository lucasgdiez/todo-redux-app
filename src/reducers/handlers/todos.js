import { ADD_TODO, TOGGLE_TODO } from '../../actions/actionsTypes';

const initialState = {
    todos: []
};

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO: {
            return {
                todos: state.todos.map((todo, index) => {
                    if(index === action.index) {
                        return {
                            ...state.todos,
                            completed: !todo.completed
                        }
                    }
                })
            }
        }
        default:
            return state;
    }
}