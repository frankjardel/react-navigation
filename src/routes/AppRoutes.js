import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
}
