import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

export const PropertyInput = ({title, placeholder, upload=false}) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            
            <View style={{justifyContent: 'center'}}>
                {upload ? 
                <View style={{position: 'absolute', left: 16}}>
                    <Image
                        source={require("../assets/img/arrow.png")}
                        style={{height: 30, width: 30}}
                    />
                </View> : 
                <></>}
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
        paddingLeft: 55,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 12,
        marginBottom: 9,
      },
  });