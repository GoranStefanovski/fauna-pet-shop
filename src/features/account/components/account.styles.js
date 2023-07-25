import styled from "styled-components/native";
import { colors } from '../../../infrastructure/theme/colors'
import { Button, TextInput, Text } from 'react-native-paper'

export const AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../../assets/home_image.jpg'),
})`
    flex: 1;
    background-color: #ddd;
    align-items: center;
    justify-content: center;
`

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255,0.2);
`

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    border-radius: 10px;
`

export const AuthButton = styled(Button)`
    color: ${colors.brand.primary},
    padding: ${(props) => props.theme.space[1]}
`

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AnimationContainer = styled.View`
    width: 100%;
    height: 44%;
    position: absolute;
    top: 30px;
    padding: ${(props) => props.theme.space[2]}
`

export const AuthButtonGuest = styled(Button)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${colors.text.primary},
    padding: ${(props) => props.theme.space[1]}
    text-align: center;
`

export const AuthButtonReset = styled(Text)`
    padding-top: ${(props) => props.theme.space[2]};
    font-size: ${(props) => props.theme.fontSizes.h6};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    color: ${colors.text.primary},
    text-align: center;
`

export const LoginWrap = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
`

export const ForgotPassword = styled.Text`
    color: ${colors.text.primary},
    font-size: ${(props) => props.theme.fontSizes.caption};
`