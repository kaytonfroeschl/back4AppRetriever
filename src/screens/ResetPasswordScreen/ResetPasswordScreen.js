import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const EmailConfirmationScreen = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const onSignInPressed = () => {
        console.warn('Sign In pressed')

        navigation.navigate('Sign In')
    }

    const onSendPressed = () => {
        console.warn('Send pressed')
        //need to set up send code programatically

        navigation.navigate('Confirm Reset Password')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                        Reset Your Password
                </Text>

                <CustomInput 
                    placeholder="Enter your username" 
                    value={username}
                    setValue={setUsername}
                />

                <CustomButton
                    text="Send"
                    onPress={onSendPressed}
                />

                <CustomButton
                    text="Back to Sign In"
                    type='TERTIARY'
                    onPress={onSignInPressed}
                />
                
            </View>
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
    },  

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },

    text: {
        color: 'white',
        marginTop: 10,
    },

    linkedText: {
        color: '#F3A747',
        fontWeight: 'bold',

    },

    SignInText: {
        color: 'white',
        marginTop: 10,
    }
})

export default EmailConfirmationScreen