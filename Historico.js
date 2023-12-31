import { View, StyleSheet, Text } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";

export default function Historico(props) {
  const { utils, setContext } = useContext(UtilsContext);
  console.log("util", utils);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Historico</Text>

      {utils.conta.map((valor, index) => (
        <Text style={styles.texto2} key={index}>{valor}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  texto: {
    fontSize: "70px",
  },
  texto2: {
    fontSize: "30px"
  }
});
