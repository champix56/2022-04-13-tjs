import React from 'react';
import PropTypes from 'prop-types';
import style from './ThumbnailLayout.module.css'

const ThumbnailLayout = (props) => {
    return (
        <div className={style.ThumbnailLayout} data-testid="ThumbnailLayout">
            {props.children}
        </div>
    );
};
ThumbnailLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
export default ThumbnailLayout;
