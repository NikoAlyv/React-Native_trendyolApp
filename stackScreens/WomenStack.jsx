import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const women = [
  {
    image: require("../assets/women1.png"),
    name: "Kısa Kollu Basic T-shirt",
    cost: "$139.00",
  },
  {
    image: require("../assets/women2.png"),
    name: " Oversize T-Shirt",
    cost: "$99.00",
  },
  {
    image: require("../assets/women3.png"),
    name: "Örme T-shirt - Lacivert",
    cost: "$89.00",
  },
  {
    image: require("../assets/women4.png"),
    name: "Kadın Siyah Crop Tişört",
    cost: "$69.00",
  },
];

const Women = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={women}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} style={styles.menStyle}>
            <Image source={item.image} />
            <Text>{item.name}</Text>
            <Text>{item.cost}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  menStyle: {
    padding: 1,
  },
});

export default Women;
