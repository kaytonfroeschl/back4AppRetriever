import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/clipart4739493.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions()
    const navigation = useNavigation()

    const onSignInPressed = () => {
        console.warn('Sign In pressed')
        //validate username and password
        //backend call needed here (@kayton, @celia)
        //if success, navigate to home screen

        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password pressed')
        //navigate to forgot password screen

        navigation.navigate('Reset Password')
    }

    const onSignUpPressed = () => {
        console.warn('Sign Up pressed')
        //navigate to sign up screen

        navigation.navigate('Sign Up')
    }

    const onSignInFacebookPressed = () => {
        console.warn('Sign In with Facebook pressed')
    }

    const onSignInGooglePressed = () => {
        console.warn('Sign In with Google pressed')
    }

    const onSignInApplePressed = () => {
        console.warn('Sign In with Apple pressed')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={styles.logo, {height: height * 0.15}}
                    resizeMode="contain" 
                />

                <Text 
                    style={styles.headerText}                
                    >
                        Retriever
                </Text>

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Password"
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In"
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text= "Sign in with Facebook" 
                    onPress={onSignInFacebookPressed}
                    foregroundColor="#E7EAF4"
                    backgroundColor="#436cc9"
                />

                <CustomButton
                    text= "Sign in with Google"
                    onPress={onSignInGooglePressed}
                    foregroundColor="#FAE9EA"
                    backgroundColor="#Bb6551"
                />

                <CustomButton
                    text= "Sign in with Apple"
                    onPress={onSignInApplePressed}
                    foregroundColor="#e3e3e3"
                    backgroundColor="#424242"
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },

    logo: {
        width:  '70%', 
        maxWidth: 300,
        maxHeight: 200,
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',

    },
})

export default SignInScreen