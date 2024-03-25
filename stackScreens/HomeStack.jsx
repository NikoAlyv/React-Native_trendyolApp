import React from "react";
import { View, TouchableOpacity, Image, FlatList } from "react-native";

const data = [
  {
    image: require("../assets/men.png"),
    navigated: "Men",
  },
  {
    image: require("../assets/women.png"),
    navigated: "Women",
  },
  {
    image: require("../assets/kids.png"),
    navigated: "Kids",
  },
  {
    image: require("../assets/bags.png"),
    navigated: "Bags",
  },
  {
    image: require("../assets/shoes.png"),
    navigated: "Shoes",
  },
];
const HomeStack = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.navigated)}
          >
            <Image source={item.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeStack;
