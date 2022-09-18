import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Navbar from "../../components/Navbar";
import { containerStyles } from "../../constants/styles";
import { COLORS, FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import Call911 from "../../components/Call911";
import BackButton from "../../components/BackButton";

function EmergencyScreen() {
  const navigation = useNavigation();

  return (
    <View style={[containerStyles.container, styles.screenContainer]}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Help")}
        style={styles.helpButton}
      >
        <Text style={styles.helpButtonText}>Help</Text>
      </TouchableOpacity>
      <View style={{ height: 24 }} />
      <Call911 />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  backButtonContainer: {
    position: "absolute",
    top: 184,
    left: 24,
  },
  helpButton: {
    width: 250,
    height: 250,
    backgroundColor: COLORS.green,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  helpButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 48,
  },
});

export default EmergencyScreen;
