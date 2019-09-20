import React from 'react';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/screens/Login';
import Loader from '../components/screens/Loader';
import Dashboard from '../components/screens/Dashboard';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Loader: {
        screen: Loader,
        navigationOptions: {
            header: null,
        }
    },
    Dashboard: {
        screen: Dashboard
    }
}, {
    initialRouteName: 'Dashboard',
});

export default createAppContainer(AppNavigator);