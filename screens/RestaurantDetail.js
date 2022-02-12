import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { foods } from "../data/FoodData";
import About from "../components/RestaurantDetail/About";
import MenuItem from "../components/RestaurantDetail/MenuItems";
import ViewCart from "../components/RestaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route}/>
      <Divider width={0.6} style={{ marginVertical: 20 }} />
      <MenuItem foods={foods}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  );
}
