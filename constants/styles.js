import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./theme";

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40,
  },
  screenContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
});

const textStyles = StyleSheet.create({
  heading: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 44,
  },
  body: {
    color: COLORS.green,
    fontFamily: FONTS.regular,
    fontSize: 18,
  },
});

export { containerStyles, textStyles };
