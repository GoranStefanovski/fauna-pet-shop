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

export const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const { onResetPassword, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <PageTitleContainer>
        <PageTitle>
            Reset Password
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
                icon="email"
                mode="contained"
                onPress={() => onResetPassword(email, navigation)}
            >
                Send E-mail
            </AuthButton>
            )}
        </Spacer>
      </AccountContainer>
      <BackButtonContainer>
        <BackButton
            icon="arrow-left"
            mode="contained"
            onPress={() => navigation.navigate("Main")}
        >
            BACK
        </BackButton>
      </BackButtonContainer>
    </AccountBackground>
  );
};