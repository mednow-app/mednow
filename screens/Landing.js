import { StatusBar, SafeAreaView, View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>Find first aid nearby.</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  screen: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 48,
  },
  header: {
    marginBottom: 20,
  },
  heading: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 44,
  },
});

export default LandingScreen;
