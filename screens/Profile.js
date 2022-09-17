import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { PropertyInput } from "../components/PropertyInput";
import Button from "../components/Button";

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Hi, Patient</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PropertyInput title={"Legal Full Name"} placeholder={"Sarah Wilson"} />
        <PropertyInput
          title={"Email"}
          placeholder={"sarah.wilson@uwaterloo.ca"}
        />
        <PropertyInput title={"Phone Number"} placeholder={"519-HTN-HTNW"} />
        <PropertyInput title={"Medical History"} />
        <PropertyInput
          title={"Health Card"}
          placeholder={"Upload"}
          upload={true}
        />
        <PropertyInput title={"Emergency Contacts"} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button type={"primary"}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  heading: {
    color: COLORS.black,
    fontWeight: FONTS.bold,
    paddingTop: 45,
    fontSize: 48,
  },
  buttonContainer: {
    paddingVertical: 30,
  },
  buttonText: {
    fontWeight: FONTS.medium,
    fontSize: 18,
  },
});

export default ProfileScreen;
