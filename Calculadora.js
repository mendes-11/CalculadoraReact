import { useState, useContext } from "react";
import {View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { UtilsContext } from "./Contex";

export default function Calculadora(props){
    
    const [text, setText] = useState("");
    const [conta, setConta] = useState("");

    const {utils, setUtils} = useContext(UtilsContext)

    function calculo(){
        const expressao = text;
        const resultado = eval(text);
        setConta(expressao + " = " + resultado);
        setText(resultado);
        enviar(conta);
    }
    
    function enviar(){
        if(utils.conta === undefined){
            setUtils({...utils, conta: [conta] })
        }
        else{
            setUtils({...utils, conta: [...utils.conta, conta] })
        }
   }

    function goToHistorico(){
        
        props.navigation.navigate("Historico")
    }
   
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Calculadora</Text>
            <Text style={styles.card}>
                {text}
            </Text>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + " + ")}>+</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + " - ")}>-</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + " / ")}>/</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + " * ")}>x</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => calculo()}>=</TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "1")}>1</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "2")}>2</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "3")}>3</TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "4")}>4</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "5")}>5</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "6")}>6</TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "7")}>7</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "8")}>8</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "9")}>9</TouchableOpacity>
            </View>
            
            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText(text + "0")}>0</TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => setText("")}>Limpar</TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => goToHistorico()}>
                Histórico 
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
    },
    card: {
       border: "solid 2px black",
       borderRadius: "5px",
       width: "350px",
       paddingHorizontal: "10px",
       paddingVertical: "20px"
      },
    texto: {
        fontSize: "70px",
    },
    container2: {
        display: "flex",
        flexDirection: "Row"
    },
      botao: {
        padding: '7px',
        backgroundColor:"white",
        display: "flex",
        alignItems: "center",
        marginHorizontal: "8px",
        borderRadius: '5px',
        marginTop: '10px',
        fontSize: "28px",
      }

})