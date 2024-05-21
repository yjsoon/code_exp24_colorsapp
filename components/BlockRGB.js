import { View, Text } from "react-native";

export default function BlockRGB({ red, green, blue }) {
  return (
    <View
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        padding: 30,
        width: "100%"
      }}></View>
  );
}
