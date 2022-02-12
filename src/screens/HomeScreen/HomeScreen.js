import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>Vaa da en machi Vazhakka Bajji</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },
})

export default HomeScreen;