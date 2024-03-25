import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const men = [
  {
    image: require("../assets/men1.png"),
    name: "Cotton T-Shirt",
    cost: "$50.00",
  },
  {
    image: require("../assets/men2.png"),
    name: "Cotton T-Shirt Text",
    cost: "$49.00",
  },
  {
    image: require("../assets/men3.png"),
    name: "Cotton T-Shirt",
    cost: "$59.00",
  },
  {
    image: require("../assets/men4.png"),
    name: "Basic T-Shirt",
    cost: "$49.00",
  },
  {
    image: require("../assets/men5.png"),
    name: "Men Polo Shirt",
    cost: "$79.00",
  },
];

const Men = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={men}
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

export default Men;
