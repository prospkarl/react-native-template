import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../Styles';
import { parseDate } from '../Helpers';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.view}>
                <Text style={styles.HomeHeader}>Today is {parseDate('2019-03-21')}</Text>

                <Text style={Styles.smallText}> Home Screen found in ./screens/Home/Home.js </Text>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    HomeHeader: {
        fontSize: 30
    }
});