import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import imgTomate from "../../../assets/frutas/Tomate.png";
import imgAbobora from "../../../assets/frutas/Abobora.png";
import imgBrocolis from "../../../assets/frutas/Brocolis.png";
import imgPepino from "../../../assets/frutas/Pepino.png";
import imgBatata from "../../../assets/frutas/Batata.png";

export default function Itens() {
  return (
    <>
      <View>
        <Text style={styles.tituloItens}>Itens da cesta</Text>
      </View>

      <View style={styles.view1}>
        <Image style={styles.imgTomate} source={imgTomate} />
        <Text style={styles.txtTomate}>Tomate</Text>
      </View>

      <View style={styles.view1}>
        <Image style={styles.imgAbobora} source={imgAbobora} />
        <Text style={styles.txtTomate}>Abobora</Text>
      </View>

      <View style={styles.view1}>
        <Image style={styles.imgBatata} source={imgBatata} />
        <Text style={styles.txtTomate}>Batata</Text>
      </View>

      <View style={styles.view1}>
        <Image style={styles.imgBrocolis} source={imgBrocolis} />
        <Text style={styles.txtTomate}>Brocolis</Text>
      </View>

      <View style={styles.view1}>
        <Image style={styles.imgPepino} source={imgPepino} />
        <Text style={styles.txtTomate}>Pepino</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tituloItens: {
    textAlign: "left",
    marginTop: 16,
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "bold",
  },

  view1: {
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
  },

  imgTomate: {
    width: 70,
    height: 70,
  },

  imgAbobora: {
    width: 70,
    height: 70,
  },

  imgBatata: {
    width: 70,
    height: 70,
  },

  imgBrocolis: {
    width: 70,
    height: 70,
  },

  imgPepino: {
    width: 70,
    height: 70,
  },

  txtTomate: {
    fontSize: 18,
    marginLeft: 12,
  },
});
