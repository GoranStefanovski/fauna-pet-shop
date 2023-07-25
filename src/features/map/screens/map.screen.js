import React, { useContext, useEffect, useState } from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';

import styled from 'styled-components/native';

import { MapCallout } from '../components/map.callout.component';
import { SearchComponent } from '../components/search.component'

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = ({ navigation }) => {    
    const [latDelta, setLatDelta] = useState(0);

    const {location} = useContext(LocationContext)
    const {restaurantsListData = []} = useContext(RestaurantsContext)

    const {lat, lng,  viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat)
    }, [location, viewport])

    return (
        <>
            <SearchComponent />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurantsListData.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <Callout
                                onPress={() => navigation.navigate("RestaurantDetail", {
                                    restaurant: restaurant,
                                  })}>
                                <MapCallout 
                                    restaurant={restaurant}
                                />
                            </Callout>
                        </Marker>
                    );
                })}
            </Map>
        </>
    )
}