import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../Components/Card";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloTopo}>Detalhes do Sistema</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compra</Text>
      </View>

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "blue",
  },
  tituloTopo: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  listaDescricao: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20,
  },
  nomeLista: {
    fontWeight: "bold",
    fontSize : 20
  },
  descricao: {
    paddingTop: 20,
    marginLeft: 20,
    fontSize: 16,
    lineHeight:26
  },
  preco : {
    color : "green",
    fontWeight:"bold",
    fontSize: 20,
    marginTop :8,
  },

  card : {
    marginTop : 30,
    width: "60%",
    height: 300,
    // backgroundColor : "black",
    borderWidth : 1,
    borderStyle : "solid",
    borderColor : "black",
    borderRadius : 15
  },

  imageCard : {
    width : "100%",
    height : "100%",
    objectFit : "cover"
  },

  containerCard : {
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }
});
