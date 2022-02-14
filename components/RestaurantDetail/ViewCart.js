import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart({ navigation, restaurantName }) {
  // useSelector() is a hook that allows us to access the state of the store, it just grabs the state in the cartReducer and takes the values from the selectedItems object
  const items = useSelector((state) => state.cartReducer.selectedItems.items); //A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0); // map() is a method that takes an array and returns a new array with the results of calling a provided function on every element in the calling array.
  // Number(item.price.replace("$", ""))) -> this is a function that takes the price and removes the $ sign from it
  // Number('15.20') -> this is a function that takes the string and converts it to a number ex 15.30
  //.map() after that we end up with an array of numbers ex [15.20, 15.20, 15.20]
  // reduce() is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. sums up the numbers in the array
  //(prev, curr) => prev + curr, 0 -> this is a function that takes the previous value and the current value and adds them together, 0 is the accumulator the starting point it starts from 0 and it keeps adding from here

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD, "the totalUSD works..."); // this is the totalUSD console log test

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 130,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
