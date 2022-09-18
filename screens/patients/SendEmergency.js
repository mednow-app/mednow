import { View, Text, StyleSheet } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Call911 from "../../components/Call911";

function SendEmergency() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.screenContainer}>
        <Text style={textStyles.heading}>Hi, Sarah.</Text>
        <View style={{ height: 18 }} />
        <Text style={textStyles.body}>
          Your emergency has been sent. If this was a small emergency and you
          now need to call for an ambulance, click here.
        </Text>
        <View style={{ height: 24 }} />
        <View style={styles.buttonContainer}>
          <Call911 />
        </View>
        <View style={{ height: 24 }} />
        <Text style={textStyles.body}>
          If you need to cancel your emergency at any time, click here:
        </Text>
        <View style={{ height: 36 }} />
        <Button type="primary" onPress={navigation.goBack}>
          Cancel Emergency
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
});

export default SendEmergency;
