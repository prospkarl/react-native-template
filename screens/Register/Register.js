import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../Styles';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.view}>
                <Text style={Styles.smallText}> Register Screen found in ./screens/Register/Register.js </Text>
            </View>
        );
    }
}

export default Register;