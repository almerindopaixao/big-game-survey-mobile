import React from  'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/Home';
import CreateRecord from '../pages/CreateRecord';

const Routes = (): JSX.Element => {
    
    const config = {
        headerShown: false,
        cardStyle: {
            backgroundColor: '#0B1F34',
        }
    };

    return (
        <NavigationContainer>
            <Navigator screenOptions={config} >
                <Screen name="Home" component={Home} />
                <Screen name="CreateRecord" component={CreateRecord} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;