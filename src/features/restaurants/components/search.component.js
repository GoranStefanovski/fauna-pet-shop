import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { View } from 'react-native';

import {LocationContext} from '../../../services/location/location.context'

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchComponent = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword)
}, [keyword])
  return (
    <SearchBarView>
        <Searchbar 
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}/>
    </SearchBarView>
  )
}