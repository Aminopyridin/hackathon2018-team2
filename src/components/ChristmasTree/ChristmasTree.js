import React from 'react';
import styles from './style.css';
import Lighter from "../Lighter/Lighter";

export default class ChristmasTree extends React.Component {
    constructor(props) {
        super(props);
        this.rightLighters = [];
        this.state = {ids : []};
        this.lighterCount = props.number;
        for (let i = 1; i <= this.lighterCount; i++) {
            this.state.ids.push(i);
        }
    }

    render() {
        console.log(this.state.ids);
        return (
            <div className={styles.tree}>
                <div className={styles.base}/>
                <div className={styles.layer}/>
                <div className={`${styles.layer} ${styles.two}`}>

                </div>
                <div className={`${styles.layer} ${styles.three}`}>

                </div>
                <div className={`${styles.layer} ${styles.four}`}>
                    {this.state.ids.map(ide => (<Lighter color="grey" id={ide} key={ide}/>))}
                </div>
            </div>
        );
    }
}