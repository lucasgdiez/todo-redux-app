import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { DeleteTodo } from '../containers/DeleteTodo';


const TodoList = ({ todos, onTodoClick }) => (
    <div>
        { todos.map((todo, index) => {
            return (
                <div>
                    {/* pass this todo.id to the delete todo
                        pass the prop todo.id to delete todo
                        on delete todo dispatch the action based on the id
                        then on the reducer pop that id on the array and return the new state
                        with the todo deleted
                    */}
                    <DeleteTodo />
                    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(index)} />
                </div>
            )
        })}
    </div>
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

export default TodoList;