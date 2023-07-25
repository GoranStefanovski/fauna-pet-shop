import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-are.component";
import { Spacer } from "../../../components/spaacer/spacer.component";
import { Text } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/native";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);  
  const [photo, setPhoto] = useState(null);

  const getProfilePicure = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  }

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicure();
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo  && (<Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />)}
          {photo  && (<Avatar.Image source={{ uri: photo}} size={180} backgroundColor="#2182BD" />)}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text>{!user.isAnonymous ? user.email : 'Guest User'}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};