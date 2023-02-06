import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Details from '../screens/Details';
import About from '../screens/About';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return<NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home' component={Tabs}
                options={{
                    title: 'React Navigation',
                    headerStyle: {
                        backgroundColor: 'dodgerblue'
                    },
                    headerTintColor: '#fff'
                }}
            />
            <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
}
