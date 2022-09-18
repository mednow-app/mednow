import { View, Text, ScrollView } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import Button from "../../components/Button";
import { PropertyInput } from "../../components/PropertyInput";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";

function PatientSignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={containerStyles.screenContainer}
      >
        <BackButton />
        <Text style={textStyles.heading}>Hi, Patient.</Text>
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Legal Full Name"
          placeholder="Enter your legal full name"
        />
        <View style={{ height: 24 }} />
        <PropertyInput title="Email" placeholder="Enter your email" />
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Phone Number"
          placeholder="Enter your phone number"
        />
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Medical History"
          placeholder="Enter any medical history"
        />
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Health Card"
          placeholder="Upload your health card"
          upload={true}
        />
        <View style={{ height: 24 }} />
        <PropertyInput
          title="Emergency Contacts"
          placeholder="Enter your emergency contacts"
        />
        <View style={{ height: 48 }} />
        <Button type="primary" onPress={() => navigation.navigate("Emergency")}>
          Sign Up
        </Button>
        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

export default PatientSignUpScreen;
