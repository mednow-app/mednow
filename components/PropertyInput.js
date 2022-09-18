import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

export const PropertyInput = ({ title, placeholder, upload = false }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={{ justifyContent: "center" }}>
        {upload ? (
          <View style={{ position: "absolute", left: 8 }}>
            <Image
              source={require("../assets/img/arrow-up.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        ) : (
          <></>
        )}
        <TextInput
          style={upload ? styles.uploadInput : styles.input}
          editable={!upload ? true : false}
          placeholder={placeholder}
          placeholderTextColor={!upload ? COLORS.grey : COLORS.black}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.green,
    marginBottom: 12,
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingLeft: 16,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    placeholderTextColor: COLORS.grey,
  },
  uploadInput: {
    height: 50,
    fontSize: 16,
    paddingLeft: 40,
    fontFamily: FONTS.regular,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
  },
});
