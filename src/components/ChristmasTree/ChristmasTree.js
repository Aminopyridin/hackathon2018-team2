import React from 'react';
import styles from './style.css';
import Lighter from "../Lighter/Lighter";
/* eslint react/prop-types: 0 */
export default class ChristmasTree extends React.Component {
    constructor(props) {
        super(props);
        this.ids = [];
        this.pointer = 0;
        this.state = {colors : {}};

        this.lighterCount = props.number;
        for (let i = 1; i <= this.lighterCount; i++) {
            this.ids.push(i);
            this.state.colors[i] = "grey";
        }
        this.rightLighters = this.shuffleIds(this.ids);
        console.log(this.rightLighters)
    }

    shuffleIds(ids) {
        let result = [...ids];
        for (let i = result.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
        return result;
    }

    handleLighter (id) {
        if (!id) return;
        return () => {
            if (this.rightLighters[this.pointer] === id) {
                const newState = {...this.state};
                newState.colors[id] = 'yellow';
                this.setState(newState);
                this.pointer++;
            } else {
                const newState = {colors : {}};
                for (let i = 1; i <= this.rightLighters.length; i++) {
                    newState.colors[i] = 'grey'
                }
                this.setState(newState);
                this.pointer = 0;
            }
            if(this.pointer === this.rightLighters.length) {
                const newState = {colors: {}}
                for (let i = 1; i <= this.rightLighters.length; i++) {
                    newState.colors[i] = 'grey'
                }
                setTimeout(() => alert('GZ'));
            }
        }
    }

    render() {
        return (
            <div className={styles.tree}>
                <div className={styles.base}/>
                <div className={styles.layer}/>
                <div className={`${styles.layer} ${styles.two}`}>

                </div>
                <div className={`${styles.layer} ${styles.three}`}>

                </div>
                <div className={`${styles.layer} ${styles.four}`}>

                </div>
                {this.ids.map(ide => (<Lighter color={this.state.colors[ide]} id={ide} key={ide}   onClick = {this.handleLighter( ide)}/>))}
            </div>
        );
    }
}