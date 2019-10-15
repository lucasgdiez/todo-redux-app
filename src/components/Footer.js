import React from 'react';
import { visibilityFilters } from '../actions/actionsTypes';
import { FilterLink } from '../containers/FilterLink';
import { FilterLinkRouter } from '../containers/FilterLinkRouter';

export const Footer = () => (
    <p>
        Show: <FilterLinkRouter filter={visibilityFilters.SHOW_ALL}>All</FilterLinkRouter>
        {', '}
        <FilterLinkRouter filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLinkRouter>
        {', '}
        <FilterLinkRouter filter={visibilityFilters.SHOW_COMPLETE}>Completed</FilterLinkRouter>
    </p>
)