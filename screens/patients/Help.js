import { View, Text } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import Button from "../../components/Button";
import { PropertyInput } from "../../components/PropertyInput";
import { useNavigation } from "@react-navigation/native";

function Help() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.screenContainer}>
        <Text style={textStyles.heading}>Hi, Sarah.</Text>
        <View style={{ height: 18 }} />
        <Text style={textStyles.body}>
          Your location has been sent to a nearby medic. If you have the ability
          to do so, answer as many of these as you can.
        </Text>
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Emergency"
          placeholder="Enter emergency details"
        />
        <View style={{ height: 48 }} />
        <Button type="primary" onPress={() => {}}>
          Save
        </Button>
        <View style={{ height: 18 }} />
        <Button type="quaternary" onPress={navigation.goBack}>
          Cancel Emergency
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="emergency"
          onPress={() => navigation.navigate("SendEmergency")}
        >
          Send Emergency
        </Button>
      </View>
    </View>
  );
}

export default Help;
