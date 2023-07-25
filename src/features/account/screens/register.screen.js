import React, { useState, useContext } from "react";
import { Text } from 'react-native'
import {
    PageTitle,
    PageTitleContainer,
    BackButton,
    BackButtonContainer,
    Loading,
    LoadingContainer} from './auth.screen.components';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { Spacer } from "../../../components/spaacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <PageTitleContainer>
        <PageTitle>
            Welcome
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
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={confirmPassword}
            textContentType="confirm password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setConfirmPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error" style={{color: 'red', maxWidth: '87%', height: 'auto', textAlign: "center"}}>{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
            {isLoading ? ( 
                <LoadingContainer>
                    <Loading size={40} animating={true} color='blue' />
                </LoadingContainer>
            ) : (
            <AuthButton
                icon="account-plus"
                mode="contained"
                onPress={() => onRegister(email, password, confirmPassword, navigation)}
            >
                Register
            </AuthButton>
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