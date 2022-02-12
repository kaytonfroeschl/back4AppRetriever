import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailConfirmationScreen from '../screens/EmailConfirmationScreen/EmailConfirmationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmResetPasswordScreen from '../screens/ConfirmResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#3b5998',
    },  
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme} > 
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Email Confirmation" component={EmailConfirmationScreen} />
                <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
                <Stack.Screen name="Confirm Reset Password" component={ConfirmResetPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;