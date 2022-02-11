import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { food } from "../../data/FoodData";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyles: {
    fontSize: 19,
    fontWeight: "600",
  },
  foodInfo: {
    width: 240,
    justifyContent: "space-evenly",
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 10,
  },
});

export default function MenuItems() {
  return (
    <View>
      {food.map((item, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.menuItemStyle} >
            <FoodInfo item={item} />
            <FoodImage item={item} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const FoodInfo = ({ item }) => (
  <View style={styles.foodInfo}>
    <Text style={styles.titleStyles}>{item.title}</Text>
    <Text>{item.description}</Text>
    <Text>{item.price}</Text>
  </View>
);

const FoodImage = ({ item }) => (
  <View>
    <Image source={{ uri: item.image }} style={styles.foodImage} />
  </View>
);
