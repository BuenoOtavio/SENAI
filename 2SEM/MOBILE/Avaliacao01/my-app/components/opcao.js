import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

export default function Opcoes({navigation}) {
    return(
        <>
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button01} onPress = {() => navigation.navigate("telaJuros") 
                }>
                    <Text>Juros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button02} onPress = {() => navigation.navigate("Switch") 
                }>
                    <Text>Switch</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    button01: {
        alignItems: "center",
        backgroundColor: 'yellow',
        fontWeight: 'bold' ,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button02: {
        alignItems: "center",
        backgroundColor: '#eea4bb',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});