import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const kids = [
  {
    image: require("../assets/kids1.png"),
    name: "Çocuk Bermuda Takım",
    cost: "$99.00",
  },
  {
    image: require("../assets/kids2.png"),
    name: "Kız Bebek Şort Etek",
    cost: "$89.00",
  },
  {
    image: require("../assets/kids3.png"),
    name: "Erkek Çocuk Beyaz Şort ",
    cost: "$60.00",
  },
  {
    image: require("../assets/kids4.png"),
    name: "Kız Çocuk Şort Takım",
    cost: "$59.00",
  },
];

const Kids = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={kids}
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

export default Kids;
