import React from 'react';
import styles from './style.css';
import propTypes from 'prop-types'
export default function Lighter({onClick}) {
    return (
        <div className={styles.lighter} onClick={onClick}>
        </div>
    )

}


