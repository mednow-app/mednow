import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import { COLORS, FONTS } from "../constants/theme";
import { containerStyles, textStyles } from "../constants/styles";

function LandingScreen({ navigation }) {
  return (
    <View style={containerStyles.container}>
      <ScrollView>
        <View style={containerStyles.screenContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.logo}>mednow</Text>
            <Text style={textStyles.heading}>Find first aid nearby.</Text>
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
            <Button
              type="primary"
              onPress={() => navigation.navigate("Emergency")}
            >
              Emergency
            </Button>
            <View style={styles.buttonSpacing} />
            <Button
              type="secondary"
              onPress={() => navigation.navigate("PatientSignUp")}
            >
              Sign Up As Patient
            </Button>
            <View style={styles.buttonSpacing} />
            <Button
              type="tertiary"
              onPress={() => navigation.navigate("MedicSignUp")}
            >
              Sign Up As Medic
            </Button>
            <View style={styles.buttonSpacing} />
            <Button
              type="quaternary"
              onPress={() => navigation.navigate("WhoCanBeAMedic")}
            >
              Who Can Be A Medic
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 24,
  },
  logo: {
    fontSize: 16,
    color: COLORS.green,
    fontFamily: FONTS.bold,
    marginBottom: 12,
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
