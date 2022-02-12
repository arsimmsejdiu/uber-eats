import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function NaviBar({ text }) {
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
      <View style={{ flexDirection: "row", width: "50%" }}>
        <Image
          source={{
            uri: "https://logo-marque.com/wp-content/uploads/2020/11/Uber-Eats-Logo.png",
          }}
          style={{ width: "60%", height: 60 }}
        />
        {/* <Text style={{ fontSize: 10, color: "#9c9c9c", marginTop: 35 }}>
          home
        </Text> */}
      </View>

      <TouchableOpacity>
        <Text style={{ fontWeight: "bold" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
