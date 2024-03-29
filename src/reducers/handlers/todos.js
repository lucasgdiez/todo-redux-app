import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../../actions/actionsTypes';

export const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]            
        case TOGGLE_TODO: {
           return state.map((todo, index) => {
                if(index === action.index) {
                    return {
                            ...todo,
                            completed: !todo.completed
                        };
                }
                return todo;
            })
        }

        case DELETE_TODO: {
            console.log('delete this todo');
            console.log('action index', action);
        }
        default:
            return state;
    }
}
