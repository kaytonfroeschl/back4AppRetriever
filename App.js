//setting up the app 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

//we need to import the navigation library from @react-navigation/native in order to navigate between screens
import Navigation from './src/navigation';

const App = () => {
  return (
    //we need to wrap the entire app in a SafeAreaView to prevent the status bar from covering the top of the screen
    //safe area view is a view that automatically adjusts its height to account for the status bar
    //then, we wrap the entire app in a navigation object
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3b5998', //code doesn't work, working code is actually in ./src/navigation/index.js under MyTheme
  },
});

export default App;
