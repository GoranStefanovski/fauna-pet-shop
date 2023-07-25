import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { Text, View } from 'react-native'

export const ResturauntSingleCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]}
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Ratings = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantImage = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: white;
`;