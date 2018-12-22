import React from 'react';
import styles from './style.css';
import Lighter from "../Lighter/Lighter";

export default class ChristmasTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ids : [], pointer : 0, rightLighters : []};

        this.lighterCount = props.number;
        for (let i = 1; i <= this.lighterCount; i++) {
            this.state.ids.push(i);
        }
        this.state.rightLighters = this.shuffleIds(this.state.ids);
    }

    shuffleIds(ids) {
        var result = [...ids];
        for (var i = result.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
        return result;
    }

    handleLighter (id) {
        const self = this;
        return function () {
            alert(self.state.rightLighters);
            if (self.state.rightLighters[self.state.pointer]) {
                self.state.pointer++;
            } else {
                self.state.pointer = 0;
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
                    {this.state.ids.map(ide => (<Lighter color="grey" id={ide} key={ide} onClick = {this.handleLighter( ide)}/>))}
                </div>
            </div>
        );
    }
}