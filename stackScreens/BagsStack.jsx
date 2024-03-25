import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const bags = [
  {
    image: require("../assets/bags2.png"),
    name: "Poma Sırt çantası",
    cost: "$109.00",
  },
  {
    image: require("../assets/bags4.png"),
    name: "Makyaj çantası",
    cost: "$89.00",
  },
  {
    image: require("../assets/bags1.png"),
    name: "Omuz çantası",
    cost: "$119.00",
  },
  {
    image: require("../assets/bags3.png"),
    name: "Cream Krem Kadın Kopitonu",
    cost: "$99.00",
  },
];

const Bags = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={bags}
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

export default Bags;
