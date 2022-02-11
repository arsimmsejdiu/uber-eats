import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://s.hdnux.com/photos/01/00/70/16/17007532/3/1200x0.jpg",
  price: "$13.99",
  reviews: "1992",
  rating: "4.5",
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formatedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formatedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
);

const RestaurantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 14.5,
    }}
  >
    {description}
  </Text>
);
