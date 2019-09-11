import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        { todos.map((todo, index) => {
            // eslint-disable-next-line no-unused-expressions
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        })}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

