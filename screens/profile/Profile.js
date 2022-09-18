import { View, Text } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";

function Profile() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.screenContainer}>
        <BackButton />
        <Text style={textStyles.heading}>Hi, Sarah.</Text>
        <View style={{ height: 24 }} />
        <Button
          type="primary"
          onPress={() => navigation.navigate("UpdateMedicalInformation")}
        >
          Update Medical Information
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="secondary"
          onPress={() => navigation.navigate("MedicSignUp")}
        >
          Register as Medic
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="tertiary"
          onPress={() => navigation.navigate("FirstAidResources")}
        >
          First Aid Resources
        </Button>
        <View style={{ height: 18 }} />
        <Button type="quaternary" onPress={() => {}}>
          Monthly Summary
        </Button>
        <View style={{ height: 18 }} />
        <Button type="quaternary" onPress={() => {}}>
          Log Out
        </Button>
      </View>
    </View>
  );
}

export default Profile;
