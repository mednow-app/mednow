import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Navbar from "../../components/Navbar";
import { containerStyles } from "../../constants/styles";
import { COLORS, FONTS } from "../../constants/theme";

function EmergencyScreen() {
  return (
    <View style={[containerStyles.container, styles.screenContainer]}>
      <TouchableOpacity onPress={() => {}} style={styles.helpButton}>
        <Text style={styles.helpButtonText}>Help</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
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
