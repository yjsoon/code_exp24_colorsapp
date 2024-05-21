import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlockRGB from "./components/BlockRGB";
import { useState } from "react";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [colors, setColors] = useState([]);

  function renderItem({ item }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", { ...item });
        }}>
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </Pressable>
    );
  }

  function addColor() {
    setColors([
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        id: Math.random().toString()
      },
      ...colors // spread and copy the colors array
    ]);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          height: 40,
          justifyContent: "center",
          width: "100%",
          alignItems: "center"
        }}
        onPress={addColor}>
        <Text style={{ color: "red", fontWeight: "bold" }}>Add a color</Text>
      </Pressable>
      <Pressable
        style={{
          height: 40,
          justifyContent: "center",
          width: "100%",
          alignItems: "center"
        }}
        onPress={() => setColors([])}>
        <Text style={{ color: "blue", fontWeight: "bold" }}>Reset</Text>
      </Pressable>

      <FlatList style={styles.list} data={colors} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    width: "100%"
  }
});
