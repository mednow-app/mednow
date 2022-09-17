import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

function Button({ type, onPress, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        type === "primary" && styles.primaryButton,
        type === "secondary" && styles.secondaryButton,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          type === "primary" && styles.primaryText,
          type === "secondary" && styles.secondaryText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 18,
  },
  primaryButton: {
    backgroundColor: COLORS.green,
  },
  secondaryButton: {
    backgroundColor: COLORS.beige,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.black,
  },
});

export default Button;
