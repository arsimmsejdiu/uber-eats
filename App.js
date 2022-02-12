//import { View, Text } from "react-native";
import NavBar from "./components/NavBar";
import RootNavigation from "./navigation";

export default function App() {
  return (
    <>
      <NavBar text="Menu"/>
      <RootNavigation></RootNavigation>
    </>
  );
}
