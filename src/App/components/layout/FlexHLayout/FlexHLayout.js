import React from 'react';
import PropTypes from 'prop-types';
import style from './FlexHLayout.module.css'

const FlexHLayout = (props) => {
    return (
        <div className={style.FlexHLayout} data-testid="FlexHLayout">
            {props.children}
        </div>
    );
};
FlexHLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default FlexHLayout;
