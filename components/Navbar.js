import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Emergency")}
      >
        <Image
          source={require("../assets/img/alert.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image source={require("../assets/img/user.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 36,
    width: "100%",
    paddingHorizontal: 32,
  },
  button: {
    backgroundColor: COLORS.beige,
    height: 72,
    width: 72,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    color: COLORS.black,
  },
});

export default Navbar;
