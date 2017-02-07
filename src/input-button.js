import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';

import styles from './styles';

export default class InputButton extends Component {
    
    render() {
        return (
            <TouchableHighlight style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}