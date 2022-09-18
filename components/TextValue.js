import { View, Text, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../constants/theme";

function TextValue({ title, children }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.green,
    marginBottom: 12,
  },
  container: {
    paddingLeft: 16,
    borderColor: COLORS.black,
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
});

export default TextValue;
