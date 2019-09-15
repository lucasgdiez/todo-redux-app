import { connect } from 'react-redux';
import { toggleTodo } from '../creators/actionsCreators';
import { visibilityFilters } from '../actions/actionsTypes';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_COMPLETE: 
            return todos.filter(todo => todo.completed === true);
        case visibilityFilters.SHOW_ACTIVE: 
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;