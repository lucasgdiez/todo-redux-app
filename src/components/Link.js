import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    let hrefLink = '#';

    if(active) {
        return <span>{children}</span>
    }

    return (
        <a
            href={hrefLink}
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;