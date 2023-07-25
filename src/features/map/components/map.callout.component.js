import React from 'react';

import { RestaurantCompact } from '../../../components/restaurant/compact-restaurant-info.component';

export const MapCallout = ({restaurant}) => {
    return (
        <RestaurantCompact 
            isMap
            restaurant={restaurant}
        />
    )
} 