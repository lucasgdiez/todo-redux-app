import { combineReducers } from 'redux';
import { todos } from './handlers/todos';
import { visibilityFilter } from './handlers/visibilityFilter';

export const todoApp = combineReducers({
    visibilityFilter,
    todos
});
