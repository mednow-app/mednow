import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/Landing";
import EmergencyScreen from "./screens/Emergency";
import PatientSignUpScreen from "./screens/Profile";
import MedicSignUpScreen from "./screens/MedicSignUp";
import ProfileScreen from "./screens/Profile";
import NotificationScreen from "./screens/Notification";

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
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MedicSignUp" component={MedicSignUpScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
