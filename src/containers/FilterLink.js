import { connect } from 'react-redux';
import { setVisiblityFilter } from '../creators/actionsCreators';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisiblityFilter(ownProps.filter))
        }
    }
};

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
