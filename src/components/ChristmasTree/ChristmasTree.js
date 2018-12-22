import React from 'react';
import styles from './style.css';
import Lighter from "../Lighter/Lighter";

export default class ChristmasTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ids : [], pointer : 0, rightLighters : [], colors : {}};

        this.lighterCount = props.number;
        for (let i = 1; i <= this.lighterCount; i++) {
            this.state.ids.push(i);
            this.state.colors[i] = "grey";
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
            alert(id);
            if (self.state.rightLighters[self.state.pointer] === id) {
                self.state.colors[id] = "yellow";
                self.state.pointer++;
            } else {
                
                for (let i = 1; i <= self.state.rightLighters.length; i++) {
                    self.state.colors[i] = "grey";
                }

                self.state.pointer = 0;
            }

            self.setState(self.state);
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
                    {this.state.ids.map(ide => (<Lighter color={this.state.colors[ide]} id={ide} key={ide} onClick = {this.handleLighter( ide)}/>))}
                </div>
            </div>
        );
    }
}