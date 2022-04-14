import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
const initialState={}
const TemplateName = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        
        return () => {}
    }, []);
    return (
        <div className={styles.TemplateName} data-testid="TemplateName">
            templateName<br/>
            {JSON.stringify(props)}
        </div>
    );
};

TemplateName.propTypes = {
};
TemplateName.defaultProps={
};


export default functionComponent;
