import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../Styles';
import Helpers, {parseDate} from '../Helpers';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(Helpers);
        
        return (
            <View style={Styles.view}>                
                <Text style={styles.HomeHeader}>Today is {parseDate('2019-3-21')}</Text>

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