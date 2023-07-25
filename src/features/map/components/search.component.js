import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { View } from 'react-native';

import {LocationContext} from '../../../services/location/location.context'

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%
`;

export const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])
  return (
    <SearchBarView>
        <Searchbar 
        placeholder="Search for a location"
        icon="map"
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