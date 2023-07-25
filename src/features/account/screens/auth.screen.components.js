
import styled from "styled-components";

import { colors } from '../../../infrastructure/theme/colors'

import { ActivityIndicator , Button, Text} from "react-native-paper";

export const PageTitle = styled.Text`
    font-size: 34px;
    font-weight: bold;
    color: white;
`;

export const PageTitleContainer = styled.View`
    text-align: center;
    margin-bottom: 10px
`;

export const BackButtonContainer = styled.View`
    margin-top: 10px
    padding: 10px;
    display: flex;
    alig-items: center;
    justify-content: center;
`

export const BackButton = styled(Button)`
    color: ${colors.brand.primary},
    padding: ${(props) => props.theme.space[2]}
`

export const Loading = styled(ActivityIndicator)`
  padding: ${(props) => props.theme.space[2]}

`;
export const LoadingContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailVerificationText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  text-align: center;
`