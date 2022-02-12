import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const EmailConfirmationScreen = () => {
const [code, setCode] = useState('')


const onSignInPressed = () => {
    console.warn('Sign In pressed')
}

const onResendCodePressed = () => {
    console.warn('Resend Code pressed')
}

const onConfirmPressed = () => {
    console.warn('Confirm pressed')
}

return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

            <Text style={styles.headerText}>
                    Confirm your Email
            </Text>

            <CustomInput 
                placeholder="Enter your code" 
                value={code}
                setValue={setCode}
            />

            <CustomButton
                text="Confirm Code"
                onPress={onConfirmPressed}
            />

            <CustomButton
                text="Resend Code"
                type='SECONDARY'
                onPress={onResendCodePressed}
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