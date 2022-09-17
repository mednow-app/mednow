import { useFonts } from "expo-font";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/Landing";
import PatientScreen from "./screens/Patient";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    SansRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    SansMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    SansBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return ( 
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Patient"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Patient" component={PatientScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
