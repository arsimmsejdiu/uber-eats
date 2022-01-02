import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../data/RestaurantData";

const YelpApiKey = "tlb7vZQrKFmdgDjfkzaA660XHqS7f3Ix2_v5eI4dA37TiAKArEoAx8y8ZXZjypJesRazhE1nNhFvUpbf74L3N1eCh1k-cZQlNsTFJQdgSrRKfL5mhmaY8Q1o2yTFYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YelpApiKey}`,
    },
  };

    return fetch(yelpUrl, apiOptions)
    .then((response) => response.json())
    .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
