import React from 'react';
import PropTypes from 'prop-types';
import style from './FlexWLayout.module.css'

const FlexWLayout = (props) => {
    return (
        <div className={style.FlexWLayout} data-testid="FlexWLayout">
            {props.children}
        </div>
    );
};
FlexWLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default FlexWLayout;
