import { SET_VISIBILITY_FILTER, visibilityFilters } from '../../actions/actionsTypes';

const { SHOW_ALL } = visibilityFilter;

const initialState = {
    SHOW_ALL,
}

const visibilityFilter = (state = initialState, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}