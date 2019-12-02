import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

//IMPORT SCREENS HERE
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

const App = (props) => {
    return (
        <Router sceneStyle={styles.scene}>
            <Scene key="root" titleStyle={{ alignSelf: 'center' }} headerLayoutPreset="center">
                <Scene key="login" title="Login" component={Login} initial hideNavBar/>
                <Scene key="home" title="Home" component={Home}/>
                <Scene key="register" title="Register" component={Register}/>
            </Scene>
        </Router >
    );
}

export default App


const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#FFF',
        shadowOpacity: 1,
        shadowRadius: 3,
    }
})
