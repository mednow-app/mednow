import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/Landing";
import EmergencyScreen from "./screens/patients/Emergency";
import PatientSignUpScreen from "./screens/patients/PatientSignUp";
import MedicSignUpScreen from "./screens/medics/MedicSignUp";
import WhoCanBeAMedicScreen from "./screens/medics/WhoCanBeAMedic";
import EmergencyNotificationScreen from "./screens/medics/notification/EmergencyNotification";
import AcceptEmergencyScreen from "./screens/medics/notification/AcceptEmergency";
import ProfileScreen from "./screens/profile/Profile";
import UpdateMedicalInformationScreen from "./screens/profile/UpdateMedicalInformation";
import FirstAidResourcesScreen from "./screens/profile/FirstAidResources";

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
        <Stack.Screen name="PatientSignUp" component={PatientSignUpScreen} />
        <Stack.Screen name="MedicSignUp" component={MedicSignUpScreen} />
        <Stack.Screen name="WhoCanBeAMedic" component={WhoCanBeAMedicScreen} />
        <Stack.Screen
          name="EmergencyNotification"
          component={EmergencyNotificationScreen}
        />
        <Stack.Screen
          name="AcceptEmergency"
          component={AcceptEmergencyScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="FirstAidResources"
          component={FirstAidResourcesScreen}
        />
        <Stack.Screen
          name="UpdateMedicalInformation"
          component={UpdateMedicalInformationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
