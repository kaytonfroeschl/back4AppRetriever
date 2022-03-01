//setting up the app 
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//we need to import the navigation library from @react-navigation/native in order to navigate between screens
import Navigation from './src/navigation/index';

//import backend
import { AuthProvider } from './providers/AuthProvider';


const App = () => {



  return (
    <AuthProvider>
    //we need to wrap the entire app in a SafeAreaView to prevent the status bar from covering the top of the screen
    //safe area view is a view that automatically adjusts its height to account for the status bar
    //then, we wrap the entire app in a navigation object
    <SafeAreaProvider>
      <View style={styles.root}>
        <Navigation />
      </View>

    </SafeAreaProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3b5998', //code doesn't work, working code is actually in ./src/navigation/index.js under MyTheme
  },
});

export default App;
