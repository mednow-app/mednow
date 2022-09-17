import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Find first aid nearby.</Text>
          </View>
          <View style={styles.graphicContainer}>
            <View style={styles.graphicBackground}>
              <Image
                source={require("../assets/img/doctor.png")}
                style={styles.doctorGraphic}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  screenContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 48,
  },
  headerContainer: {
    marginBottom: 30,
  },
  heading: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 44,
  },
  graphicContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: -20,
  },
  graphicBackground: {
    flex: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "85%",
    height: 260,
    backgroundColor: COLORS.beige,
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300,
  },
  doctorGraphic: {
    marginRight: 50,
    width: 148,
    height: 223,
  },
});

export default LandingScreen;
