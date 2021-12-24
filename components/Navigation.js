import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Navigation() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image
        source={{
          uri: "https://logo-marque.com/wp-content/uploads/2020/11/Uber-Eats-Logo.png",
        }}
        style={{ width: "30%", height: 60 }}
      />
      <TouchableOpacity>
        <Text style={{ fontWeight: "bold" }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
