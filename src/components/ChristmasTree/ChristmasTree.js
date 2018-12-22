import React from 'react';
import styles from './style.css';
/*
class Fire extends React.Component {
    render () {
        return (

        )
    }
}
*/
export default class ChristmasTree extends React.Component {
    render () {
        return (
            <div className={styles.tree}>
                <div className={styles.base} />
                <div className={styles.layer} />
                <div className={`${styles.layer} ${styles.two}`} />
                <div className={`${styles.layer} ${styles.three}`} />
                <div className={`${styles.layer} ${styles.four}`} />
            </div>
        );
    }
}