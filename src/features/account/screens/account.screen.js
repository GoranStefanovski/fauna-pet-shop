import React, { useContext, useEffect } from 'react';
import LottieView from "lottie-react-native";
import { Text } from 'react-native'
import styled from 'styled-components';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthButtonGuest, AnimationContainer, AuthButtonReset } from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { Spacer } from '../../../components/spaacer/spacer.component';

import { LoadingContainer, Loading, AppTitle } from './auth.screen.components';


const CompactImage = styled.Image`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 240px;
    height: 160px;
    background-color: rgba(255,255,255,0.8);
    padding: ${(props) => props.theme.space[1]};
`

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 220px;
    height: 200px;
    background-color: rgba(255,255,255,0.8);
    padding: ${(props) => props.theme.space[1]};
`
const isAndroid = Platform.OS === 'android';

export const AccountScreen = ({ navigation }) => {
    const { onContinueAsGuest, isLoadingAuth, setError } = useContext(AuthenticationContext);
    const Image = isAndroid ? CompactWebview : CompactImage;

    return <AccountBackground>
        <AccountCover />
        <Image source={require('../../../../assets/FaunaLogo.png')}/>
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
        </AccountContainer>
    </AccountBackground>
}