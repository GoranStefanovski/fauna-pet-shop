import React from 'react';
import RestaurantsScreen from '../../../src/features/restaurants/screens/restaurants.screen';

import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator 
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS,
              }}>
            <RestaurantsStack.Screen
                screenOptions={{
                    headerShown: false
                }}
                name="RestaurantsList"
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantsStack.Navigator>
    )
}