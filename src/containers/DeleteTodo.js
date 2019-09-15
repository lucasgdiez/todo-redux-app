import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../creators/actionsCreators';

export let DeleteTodo = ({ dispatch }, index) => {
    return (
            <input 
                type="checkbox"
                onClick={ e => {
                    e.preventDefault();
                    dispatch(deleteTodo('deleted'))
                }}
            />
    )
}

DeleteTodo = connect()(DeleteTodo);

 