//import { View, Text } from "react-native";
import Navigation from "./components/Navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function App() {
  return (
    <>
      <Navigation text="Menu"/>
      {/* <Home /> */}
      <RestaurantDetail />
    </>
  );
}
