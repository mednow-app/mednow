import { View, Text, Linking } from "react-native";
import { containerStyles, textStyles } from "../../constants/styles";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

function FirstAidResources() {
  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.screenContainer}>
        <BackButton />
        <Text style={textStyles.heading}>First Aid Resources</Text>
        <View style={{ height: 24 }} />
        <Button
          type="primary"
          onPress={() =>
            Linking.openURL("https://youtu.be/-NodDRTsV88").catch((err) =>
              console.error("An error occurred", err)
            )
          }
        >
          How to do CPR
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="secondary"
          onPress={() =>
            Linking.openURL("https://youtu.be/mkpbbWZvYmw").catch((err) =>
              console.error("An error occurred", err)
            )
          }
        >
          Signs of a Stroke
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="tertiary"
          onPress={() =>
            Linking.openURL("https://youtu.be/Qpje30r7wYo").catch((err) =>
              console.error("An error occurred", err)
            )
          }
        >
          How to Respond to a Heart Attack
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="quaternary"
          onPress={() =>
            Linking.openURL(
              "https://www.redcross.ca/training-and-certification/first-aid-tips-and-resources"
            ).catch((err) => console.error("An error occurred", err))
          }
        >
          Canadian Red Cross Tips
        </Button>
        <View style={{ height: 18 }} />
        <Button
          type="quaternary"
          onPress={() =>
            Linking.openURL("https://youtu.be/NoO5DqHArJA").catch((err) =>
              console.error("An error occurred", err)
            )
          }
        >
          How to Save a Drowning Person
        </Button>
      </View>
    </View>
  );
}

export default FirstAidResources;
