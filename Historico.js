import {View, StyleSheet, Text } from "react-native";

export default function Historico(props){
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Historico</Text>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
    },
    texto: {
        fontSize: "70px",
    },
})