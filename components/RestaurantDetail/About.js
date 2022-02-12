import { View, Text, Image } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params;

  const formatedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formatedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
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
