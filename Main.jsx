import React from "react";
import "react-native-gesture-handler";
import "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./Screens/Home";

const Stack = createStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trendyol"
          component={Home}
          options={{
            headerTitle: "Trendyol",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              backgroundColor: "black",
              color: "white",
              padding: 10,
              paddingLeft: 90,
              paddingRight: 90,
            },
            headerStyle: {
              backgroundColor: "orange",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
      backgroundColor: "black",
      color: "white",
      padding: 10,
      paddingLeft: 90,
      paddingRight: 90,
    },
    headerStyle: {
      backgroundColor: "orange",
    },
  },
});
