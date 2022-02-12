import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')

const navigation = useNavigation()

const onSignInPressed = () => {
    console.warn('Sign In pressed')

    navigation.navigate('Sign In')
}

const onRegisterPressed = () => {
    console.warn('Register pressed')

    navigation.navigate('Email Confirmation')
}

const onTermOfUSePressed = () => {
    console.warn('Term of Use pressed')
    //need to navigate to term of use screen
    //need to set up terms of use page
}

const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy pressed')
    //need to navigate to privacy policy screen
    //need to set up privacy policy page
}

return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

            <Text style={styles.headerText}>
                    Create an account
            </Text>

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            />

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput 
                placeholder="Password"
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />

            <CustomInput 
                placeholder="Confirm Password"
                value={confirmPassword} 
                setValue={setConfirmPassword} 
                secureTextEntry={true}
            />

            <CustomButton
                text="Register"
                onPress={onRegisterPressed}
            />

            <Text style={styles.text}>
                By registering, you confirm that you accept our <Text style={styles.linkedText} onPress={onTermOfUSePressed}>Terms of Use </Text> 
                and <Text style={styles.linkedText} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.
            </Text>

            <Text style={styles.SignInText}>
                Already have an account? <Text style={styles.linkedText} onPress={onSignInPressed}>Sign In</Text>
            </Text>
            
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
        fontSize: 30,
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
        marginTop: 30,
    }
})

export default SignUpScreen