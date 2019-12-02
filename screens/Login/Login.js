import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Styles from '../Styles';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.view}>
                <Text style={styles.LoginTextHeader}>Login Screen</Text>     

                <View style={styles.button}>
                    <Button onPress={() => Actions.home()} title="Go to Home Screen" />
                </View>

                <View style={styles.button}>
                    <Button onPress={() => Actions.register()} title="Go to Register Screen" />
                </View>

                <Text style={Styles.smallText}> Login Screen found in ./screens/Login/Login.js </Text>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    LoginTextHeader: {
        fontSize: 35,
    },
    button: {
        marginVertical: 20
    }
});