import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { containerStyles, textStyles } from "../../../constants/styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import TextValue from "../../../components/TextValue";

function AcceptEmergency() {
  const navigation = useNavigation();

  return (
    <View style={containerStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={containerStyles.screenContainer}
      >
        <Text style={textStyles.heading}>Emergency Accepted</Text>
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
        <Image
          source={require("../../../assets/img/map.png")}
          style={styles.mapImage}
        />
        <View style={{ height: 24 }} />
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/img/qr-code.png")}
            style={styles.qrCodeImage}
          />
          <View style={{ height: 12 }} />
          <Text style={textStyles.body}>For Paramedic</Text>
        </View>
        <View style={{ height: 24 }} />
        <Button type="primary" onPress={() => navigation.navigate("Landing")}>
          Resolved
        </Button>
        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapImage: { width: 390, height: 450 },
  qrCodeImage: { width: 150, height: 166 },
});

export default AcceptEmergency;
