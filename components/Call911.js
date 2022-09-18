import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import call from "react-native-phone-call";

const callArgs = {
  number: "6476210369",
  prompt: true,
  skipCanOpen: true,
};

function Call911() {
  return (
    <TouchableOpacity
      onPress={() => call(callArgs).catch(console.error)}
      style={styles.button}
    >
      <Text style={styles.buttonText}>911</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.red,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 48, fontFamily: FONTS.bold, color: COLORS.white },
});

export default Call911;
