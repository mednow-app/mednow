import { View, Text, ScrollView } from "react-native";
import { containerStyles, textStyles } from "../../../constants/styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import TextValue from "../../../components/TextValue";

function EmergencyNotification() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={containerStyles.screenContainer}
      >
        <Text style={textStyles.heading}>Emergency Alert</Text>
        <View style={{ height: 24 }} />
        <TextValue title="Emergency">
          Tripped and fell, probably twisted ankle.
        </TextValue>
        <View style={{ height: 24 }} />
        <TextValue title="Location">
          Engineering 7, University of Waterloo
        </TextValue>
        <View style={{ height: 24 }} />
        <TextValue title="Medical History">
          Allergic to nuts, broken bone in 2014.
        </TextValue>
        <View style={{ height: 24 }} />
        <TextValue title="First Name">Jane</TextValue>
        <View style={{ height: 24 }} />
        <TextValue title="Phone Number">519-HTN-HTNW</TextValue>
        <View style={{ height: 48 }} />
        <Button
          type="primary"
          onPress={() => navigation.navigate("AcceptEmergency")}
        >
          Accept
        </Button>
        <View style={{ height: 24 }} />
        <Button type="quaternary" onPress={navigation.goBack}>
          Decline
        </Button>
        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

export default EmergencyNotification;
