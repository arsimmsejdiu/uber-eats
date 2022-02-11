import { View, Text, Image } from "react-native";
import React from "react";

const image = "https://s.hdnux.com/photos/01/00/70/16/17007532/3/1200x0.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai • Confort Food • $$ • 🎫 • 4 ⭐ (2345+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
