import { View, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetail/About";
import MenuItem from "../components/RestaurantDetail/MenuItems";

export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
