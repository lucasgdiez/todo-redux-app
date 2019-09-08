import { combineReducers } from 'redux';
import { todos } from './handlers/todos';
import { visibilityFilter } from './handlers/visibilityFilter';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;