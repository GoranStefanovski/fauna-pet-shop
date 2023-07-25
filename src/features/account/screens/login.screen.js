import React, { useState, useContext } from "react";
import { Text } from 'react-native'
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  LoginWrap,
  ForgotPassword
} from "../components/account.styles";
import { Spacer } from "../../../components/spaacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
    PageTitle,
    PageTitleContainer,
    BackButton,
    BackButtonContainer,
    Loading,
    LoadingContainer
    } from './auth.screen.components';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onResetPassword, error, isLoadingAuth } = useContext(AuthenticationContext);
  
  return (
    <AccountBackground>
      <AccountCover />
      <PageTitleContainer>
        <PageTitle>
            Hello Again!
        </PageTitle>
      </PageTitleContainer>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error" style={{color: 'red'}}>Please enter valid login data</Text>
          </Spacer>
        )}
        <Spacer size="large">
            {isLoadingAuth ? ( 
                <LoadingContainer>
                    <Loading size={40} animating={true} color='blue' />
                </LoadingContainer>
            ) : (
              <LoginWrap>
                <AuthButton
                    icon="login"
                    mode="contained"
                    onPress={() => onLogin(email, password)}>
                    Login
                </AuthButton>
                <Spacer size="large">
                  <ForgotPassword
                    onPress={() => onResetPassword(email, navigation, true)}>
                    Forgot Password?
                  </ForgotPassword>
                </Spacer>
              </LoginWrap>
              )}
        </Spacer>
      </AccountContainer>
      <BackButtonContainer>
        <BackButton
            icon="arrow-left"
            mode="contained"
            onPress={() => navigation.goBack()}
        >
            BACK
        </BackButton>
      </BackButtonContainer>
    </AccountBackground>
  );
};