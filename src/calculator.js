import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';
import InputButton from './input-button';
import styles from './styles';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={styles.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    _renderInputButtons() {

        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={()=>{}}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

}

AppRegistry.registerComponent('Calculator', () => Calculator);