import React, { useContext, useEffect, useState } from "react";
import { StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import ResturauntCard from "../components/restaurant-card";
import { Spacer } from "../../../components/spaacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator , Colors} from "react-native-paper";
import { SearchComponent } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";

const SafeView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

import { RestaurantList } from "../components/restaurant-list.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { HeaderComponent } from "../../../components/header.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestaurantsScreen({ navigation }) {
  const { isLoading, restaurantsListData } = useContext(RestaurantsContext);
  const { isLoadingAuth } = useContext(AuthenticationContext)
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeView>
      {isLoading && isLoadingAuth && (
        <LoadingContainer>
          <Loading size={50} animating={true} color='blue' />
        </LoadingContainer>
      )}
      <HeaderComponent></HeaderComponent>
      {/* <SearchComponent 
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}/>
        {
          isToggled && 
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        } */}
        <RestaurantList 
            data={restaurantsListData }
            renderItem={({ item }) => {
              return (
                <TouchableOpacity 
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }>
                  <FadeInView>
                    <Spacer position="bottom" size="large">
                      <ResturauntCard restaurant={item} />
                    </Spacer>
                  </FadeInView>
                </TouchableOpacity>
              );
            }}
          keyExtractor={(item) => item.name}
          key={(item) => item.name}
        />
    </SafeView>
  );
}
