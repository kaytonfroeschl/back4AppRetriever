import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const EmailConfirmationScreen = () => {
const [confirmCode, setConfirmCode] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')


const onSignInPressed = () => {
    console.warn('Sign In pressed')
}

const onSubmitPressed = () => {
    console.warn('Submit pressed')
}

return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

            <Text style={styles.headerText}>
                    Reset Your Password
            </Text>

            <CustomInput 
                placeholder="Enter confirmation code" 
                value={confirmCode}
                setValue={setConfirmCode}
            />

            <CustomInput
                placeholder="Enter your new password"
                value={confirmPassword}
                setValue={setConfirmPassword}  
            />

            <CustomButton
                text="Submit"
                onPress={onSubmitPressed}
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