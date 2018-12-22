import React, {PureComponent} from 'react';
import styles from './style.css';
import propTypes from 'prop-types'
/* eslint react/prop-types: 0 */
export default class Lighter extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className={styles.lighter} style={{backgroundColor : this.props.color}} onClick={() => this.props.onClick(this.props.id)}>
        </div>)
    }
}


