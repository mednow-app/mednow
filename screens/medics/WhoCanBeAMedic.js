import { View, Text, StyleSheet } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import { COLORS } from "../../constants/theme";
import BackButton from "../../components/BackButton";

function WhoCanBeAMedicScreen() {
  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.screenContainer}>
        <BackButton />
        <Text style={textStyles.heading}>Who Can Be A Medic?</Text>
        <View style={{ height: 18 }} />
        <Text style={textStyles.body}>
          Anyone! There are two types of medics:
        </Text>
        <View style={{ height: 18 }} />
        <View style={styles.category}>
          <Text style={textStyles.body}>Basic</Text>
        </View>
        <Text style={[textStyles.body, styles.listItem]}>
          {"\u2022"} Anyone who is willing to lend a helping hand in times of
          emergency
        </Text>
        <Text style={[textStyles.body, styles.listItem]}>
          {"\u2022"} Eg. providing a bandaid, finding a wheelchair, washing a
          cut
        </Text>
        <View style={{ height: 32 }} />
        <View style={styles.category}>
          <Text style={textStyles.body}>Intermediate</Text>
        </View>
        <Text style={[textStyles.body, styles.listItem]}>
          {"\u2022"} Someone who is certified with at least their Standard First
          Aid & CPR-C qualifications
        </Text>
        <Text style={[textStyles.body, styles.listItem]}>
          {"\u2022"} Someone who can perform emergency first aid and assist
          first responders once they arrive
        </Text>
        <Text style={[textStyles.body, styles.listItem]}>
          {"\u2022"} Eg. performing CPR, helping a choking victim, addressing a
          stroke or heart attack
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: COLORS.beige,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    width: 133,
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 6,
  },
});

export default WhoCanBeAMedicScreen;
