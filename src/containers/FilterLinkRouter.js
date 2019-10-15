import React from 'react';
import { NavLink } from 'react-router-dom';

export const FilterLinkRouter = ({ filter, children }) => (
    <NavLink
        exact
        to={filter === 'SHOW_ALL' ? '/SHOW_ALL' : `/${filter}`}
        activeStyle={{
            textDecoration:'none',
            color:'pink'
        }}
    >
    {
        children
    }
    </NavLink>
);

