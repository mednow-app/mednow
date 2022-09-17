import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import { COLORS, FONTS } from "../constants/theme";

function LandingScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.logo}>mednow</Text>
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
          <View style={styles.buttonsContainer}>
            <Button type="primary" onPress={() => {}}>
              Emergency
            </Button>
            <View style={styles.buttonSpacing} />
            <Button type="secondary" onPress={() => {}}>
              Sign Up As Patient
            </Button>
            <View style={styles.buttonSpacing} />
            <Button type="tertiary" onPress={() => {}}>
              Sign Up As Medic
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40,
  },
  screenContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 48,
  },
  headerContainer: {
    marginBottom: 24,
  },
  logo: {
    fontSize: 16,
    color: COLORS.green,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  heading: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 44,
  },
  graphicContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: -20,
    marginBottom: 36,
  },
  graphicBackground: {
    flex: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "85%",
    height: 300,
    backgroundColor: COLORS.beige,
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300,
  },
  doctorGraphic: {
    marginRight: 50,
    width: 173,
    height: 261,
  },
  buttonSpacing: {
    height: 18,
  },
});

export default LandingScreen;
