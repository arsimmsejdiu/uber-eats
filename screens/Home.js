import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../data/RestaurantData";

const YelpApiKey = process.env.YELP_API_KEY;

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
