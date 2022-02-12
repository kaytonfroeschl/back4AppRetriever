
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import EmailConfirmationScreen from './src/screens/EmailConfirmationScreen/EmailConfirmationScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import ConfirmResetPasswordScreen from './src/screens/ConfirmResetPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
});

export default App;
