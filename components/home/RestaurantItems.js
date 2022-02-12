import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price, 
            reviews: restaurant.review_count, 
            rating: restaurant.rating, 
            categories: restaurant.categories,
          })}
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 5 }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{ position: "absolute", right: 25, top: 25 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 &#183; min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  </View>
);
