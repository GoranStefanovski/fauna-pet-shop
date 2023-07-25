import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`

const Item = styled(View)`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`

const CompactText = styled.Text`
    margin-top: 10px;
    text-align: center;
`
const isAndroid = Platform.OS === 'android';

export const RestaurantCompact = ({restaurant, isMap }) => {
    const Image = (isAndroid && isMap) ? CompactWebview : CompactImage
    return (
        <Item>
            <Image source={{uri: restaurant.photos[0]}}/>
            <CompactText>
                {restaurant.name}
            </CompactText>
        </Item>
    )
}