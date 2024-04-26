import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

export default function formIdade() {
    const [ano, setAno] = React.useState('');
    const [mes, setMes] = React.useState('');
    const [dia, setDia] = React.useState('');
    const [idade, setIdade] = React.useState('');

    const idadeCalc = () => {

        const numberAno = Number(ano);
        const numberMes = Number(mes);
        const numberDia = Number(dia);

        var data = new Date,
        anoAtual = data.getFullYear(),
        mesAtual = data.getMonth(),
        diaAtual = data.getDay(),

        idadeAnos = anoAtual - numberAno;

        if(mesAtual < numberMes || mesAtual == numberMes && diaAtual < numberDia){
            idadeAnos--;
        }

        setIdade(idadeAnos)
    }

    return (
        <>
            <></>
        </>
    )
}