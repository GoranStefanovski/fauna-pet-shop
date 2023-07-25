import React, { useContext } from 'react';
import LottieView from "lottie-react-native";
import { Text } from 'react-native'

import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthButtonGuest, AnimationContainer, AuthButtonReset } from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { Spacer } from '../../../components/spaacer/spacer.component';

import { LoadingContainer, Loading } from './auth.screen.components';

export const AccountScreen = ({ navigation }) => {
    const { onContinueAsGuest, isLoadingAuth } = useContext(AuthenticationContext);

    // const continueAsGuest = () => {
    //     navigation.navigate("Restaurants")
    //     console.log("aslkdjalskdjasdlkajsdlaksjd")
    //     onLogin(email, password)
    // }

    return <AccountBackground>
        <AccountCover />
        <AnimationContainer>
            <LottieView
                key="animation"
                autoPlay
                loop
                resizeMode="contain"
                source={require('../../../../assets/animations/watermelon.json')}
            />
        </AnimationContainer>
        <Text style={{ fontSize: 28, fontWeight: 'bold', opacity: 1 }}>Meals To Go</Text>
        <AccountContainer>
            <AuthButton
                icon="account"
                mode='contained'
                onPress={() => navigation.navigate("Login")}
            >Login</AuthButton>
            <Spacer size="large">
                <AuthButton
                    icon="account-plus"
                    mode='contained'
                    onPress={() => navigation.navigate("Register")}
                >Create Account</AuthButton>
            </Spacer>
        </AccountContainer>
        <Spacer size="large">
            {isLoadingAuth ? ( 
                <LoadingContainer>
                    <Loading size={40} animating={true} color='blue' />
                </LoadingContainer> ) :
            <AuthButton
                icon="login"
                mode='contained'
                onPress={() => onContinueAsGuest()}
            >Continue as guest</AuthButton>}
        </Spacer>
    </AccountBackground>
}