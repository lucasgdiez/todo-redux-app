import { createStore } from 'redux';
import { todoApp } from '../reducers/index';
import {addTodo, toggleTodo, setVisiblityFilter} from '../creators/actionsCreators';
import { visibilityFilters } from '../actions/actionsTypes';

const store = createStore(todoApp);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));

store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisiblityFilter(visibilityFilters.SHOW_COMPLETE))

export default store;