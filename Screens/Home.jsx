import "react-native-gesture-handler";
import "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "../stackScreens/HomeStack";
import MenStack from "../stackScreens/MenStack";
import KidsStack from "../stackScreens/KidsStack";
import WomenStack from "../stackScreens/WomenStack";
import BagsStack from "../stackScreens/BagsStack";
import ShoesStack from "../stackScreens/ShoesStack";
const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="Men" component={MenStack} />
      <Stack.Screen name="Women" component={WomenStack} />
      <Stack.Screen name="Kids" component={KidsStack} />
      <Stack.Screen name="Bags" component={BagsStack} />
      <Stack.Screen name="Shoes" component={ShoesStack} />
    </Stack.Navigator>
  );
};
export default Home;
