import React from 'react';
import styles from './style.css';
import Lighter from "../Lighter/Lighter";

export default class ChristmasTree extends React.Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div className={styles.tree}>
                <div className={styles.base} />
                <div className={styles.layer} />
                <div className={`${styles.layer} ${styles.two}`}>
                    <Lighter color="grey"/>
                </div>
                <div className={`${styles.layer} ${styles.three}`} />
                <div className={`${styles.layer} ${styles.four}`} />
            </div>
        );
    }
}