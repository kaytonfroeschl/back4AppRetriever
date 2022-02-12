
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
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
