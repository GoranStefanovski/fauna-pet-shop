import React from "react";
import { Text } from 'react-native'
import {
    PageTitle,
    PageTitleContainer,
    BackButton,
    BackButtonContainer,
    EmailVerificationText
} from './auth.screen.components';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const EmailVerificationScreen = ({ navigation }) => {

  return (
    <AccountBackground>
      <AccountCover />
      <PageTitleContainer>
        <PageTitle>
            Email Verification
        </PageTitle>
      </PageTitleContainer>
      <AccountContainer>
        <EmailVerificationText>E-mail Verification link waas sent to your email.</EmailVerificationText>
        <EmailVerificationText>Please verify your e-mail</EmailVerificationText>
      </AccountContainer>
      <BackButtonContainer>
        <BackButton
            icon="arrow-left"
            mode="contained"
            onPress={() => navigation.navigate('Main')}
        >
            BACK
        </BackButton>
      </BackButtonContainer>
    </AccountBackground>
  );
};