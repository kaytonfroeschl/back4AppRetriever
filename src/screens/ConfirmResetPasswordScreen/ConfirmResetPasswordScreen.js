import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const EmailConfirmationScreen = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation()

    const onSignInPressed = () => {
        console.warn('Sign In pressed')

        navigation.navigate('Sign In')
    }

    const onSubmitPressed = () => {
        console.warn('Submit pressed')
        
        //need to set up reset successful alert and redirect user to the home screen and ask to sign in again
        navigation.navigate('Sign In')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                        Reset Your Password
                </Text>

                <CustomInput 
                    placeholder="Enter new password" 
                    value={newPassword}
                    setValue={setNewPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Enter your new password"
                    value={confirmPassword}
                    setValue={setConfirmPassword} 
                    secureTextEntry={true} 
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