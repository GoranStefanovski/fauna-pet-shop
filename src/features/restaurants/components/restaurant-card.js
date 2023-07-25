import React from "react";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";
import starIcon from '../../../../assets/star'
import isOpenIcon from '../../../../assets/isOpen'
import { Spacer } from "../../../components/spaacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  ResturauntSingleCard,
  Title,
  Address,
  Ratings,
  Section,
  SectionEnd,
  Open,
  Info,
  Icon,
  RestaurantImage
} from './restaurant-card.styles'

export const ResturauntCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Default",
    icon,
    photos = [
      "https://st2.depositphotos.com/2714851/8969/i/600/depositphotos_89692574-stock-photo-burger-meal-on-white-plate.jpg",
    ],
    address = "Restaurant Address 101",
    isOpenNow = true,
    rating = 2,
    placeId,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturauntSingleCard elevation={5}>
      <Favourite  restaurant={restaurant}/>
      <RestaurantImage source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Ratings>
            { ratingArray.map((_, i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={starIcon} width={20} height={20}/>
              ))}
          </Ratings>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={isOpenIcon} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ResturauntSingleCard>
  );
};

export default ResturauntCard;
