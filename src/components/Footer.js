import React from 'react';
import PropTypes from 'prop-types';
import { visibilityFilters } from '../actions/actionsTypes';
import { FilterLink } from '../containers/FilterLink';

export const Footer = () => (
    <p>
        Show: <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={visibilityFilters.SHOW_COMPLETE}>Completed</FilterLink>
    </p>
)