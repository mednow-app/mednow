import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/theme";

function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
      <Image
        source={require("../assets/img/arrow-left.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: COLORS.beige,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 24,
  },
  icon: { height: 36, width: 36 },
});

export default BackButton;
