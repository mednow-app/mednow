import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

function Button({ type, onPress, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        type === "emergency" && styles.emergencyButton,
        type === "primary" && styles.primaryButton,
        type === "secondary" && styles.secondaryButton,
        type === "tertiary" && styles.tertiaryButton,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          type === "emergency" && styles.emergencyText,
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
  emergencyButton: {
    backgroundColor: COLORS.red,
  },
  primaryButton: {
    backgroundColor: COLORS.green,
  },
  secondaryButton: {
    backgroundColor: COLORS.beige,
  },
  tertiaryButton: {
    backgroundColor: COLORS.grey,
  },
  quaternaryButton: {
    backgroundColor: COLORS.white,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  emergencyText: {
    color: COLORS.white,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.black,
  },
});

export default Button;
