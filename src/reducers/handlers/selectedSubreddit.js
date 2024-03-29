import { SELECT_SUBREDDIT } from '../../actions/actionsTypes';

export const selectedSubreddit = (state = 'reactjs', action) => {
    switch(action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}