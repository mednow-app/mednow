import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

export const PropertyInput = ({title, placeholder}) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder}/>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: FONTS.medium,
        color: COLORS.green,
    },
    input: {
      height: 50,
      padding: 20,
      borderColor: COLORS.black,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 12,
      marginBottom: 9,
    },
  });