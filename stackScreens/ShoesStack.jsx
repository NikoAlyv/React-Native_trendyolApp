import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const shoes = [
  {
    image: require("../assets/shoes3.png"),
    name: "Erkek Spor Ayakkabı",
    cost: "$179.00",
  },
  {
    image: require("../assets/shoes4.png"),
    name: " Rahat Spor Ayakkabı ",
    cost: "$129.00",
  },
  {
    image: require("../assets/shoes2.png"),
    name: "Kadın Krem Sneaker",
    cost: "$169.00",
  },
  {
    image: require("../assets/shoes1.png"),
    name: "Sneaker Ayakkabı",
    cost: "$149.00",
  },
];

const Shoes = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={shoes}
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

export default Shoes;
