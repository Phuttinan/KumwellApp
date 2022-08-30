import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Navigation/AppNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>   
    )
}





export default App;
