import {
    StyleSheet,
    text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import react from 'react';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

const user = {
    usename: "user",
    pass: "123456"
}

export default function loginForm({ navigation }) {
    const { username, setUsername } = React.useState('user');
    const { pass, setPass } = React.useState('123456');

    const validaUsuario = () => {
        if (username === user.usename && pass === user.pass) {
            navigation.navigate('telaIMC', { name: 'telaIMC' });
        }
    }

    return (
        <View style={styles.container} >
            <Text>Formulário de Cadastro</Text>
            <View style={style.form}>
                {/*USERNAME*/}
                <MaskInput
                    style={styles.TextInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    value={username}
                    placeholder='Digite seu horário'
                />
            </View>
        </View>
     )  
}