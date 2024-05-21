import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;

  return (
    <View
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
}
