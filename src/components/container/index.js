import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.scss';

const Container = ({ children, className }) => (
    <div className={classnames(style.container, className)}>{children}</div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Container.defaultProps = {
    className: ''
};

export default Container;