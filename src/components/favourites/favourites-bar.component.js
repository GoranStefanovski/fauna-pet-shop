import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { RestaurantCompact } from '../restaurant/compact-restaurant-info.component'

const FavoruitesWrapper = styled.View`
    padding: 10px;
`
const SingleFavouriteWrapper = styled.View`
    padding: 0 5px;
`

const FavouritesHeader = styled.Text`

`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
 return (
        <FavoruitesWrapper>
            <FavouritesHeader>
                Favourites
            </FavouritesHeader>
            <ScrollView horizontal showHoriznotalScrollIndicator={false}>
                { 
                    favourites.map((res) => {
                        const key = res.name;
                        return (
                            <SingleFavouriteWrapper key={key}>
                                <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {
                                            restaurant: res,
                                        })}>
                                    <RestaurantCompact restaurant={res} style={{marginRight: "10px"}}/>
                                </TouchableOpacity>
                            </SingleFavouriteWrapper>
                        )
                    })
                }
            </ScrollView>
        </FavoruitesWrapper>
    )
}