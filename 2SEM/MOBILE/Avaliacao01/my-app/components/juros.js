import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

export default function TelaJuros() {
    const [valor, setValor] = React.useState('');
    const [juros, setJuros] = React.useState('');
    const [result, setResult] = React.useState('');

    const jurosCalc = () => {
        const resultado = valor * (juros/100);
        setResult(resultado)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Calculadora de Juros</Text>

                    <MaskInput
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setValor(masked)}
                        value={valor}
                        placeholder="Digite o valor inicial"
                        keyboardType="numeric"

                    />
                    <MaskInput
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setJuros(masked)}
                        value={juros}
                        placeholder="Porcentagem(%):"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={jurosCalc}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>Resultado : R${result}</Text>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        textAlign: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "yellow",
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
});