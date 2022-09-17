import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

export const PropertyInput = ({title, placeholder, upload=false}) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <View style={{justifyContent: 'center'}}>
                {upload ? <Text style={{position: 'absolute'}}>sd</Text> : <></>}
                <TextInput 
                    style={upload ? styles.uploadInput : styles.input} 
                    editable={!(upload) ? true : false} 
                    placeholder={placeholder}
                    placeholderTextColor={!(upload) ? COLORS.grey : COLORS.black}
                />
            </View>
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
      fontSize: 16,
      paddingLeft: 20,
      borderColor: COLORS.black,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 12,
      marginBottom: 9,
    },
    uploadInput: {
        height: 50,
        fontSize: 20,
        paddingLeft: 69,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 12,
        marginBottom: 9,
      },
  });