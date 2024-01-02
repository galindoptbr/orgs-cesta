import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import ImgTopo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={ImgTopo} style={styles.topo} />
      <Text style={styles.title}>Detalhes da Cesta</Text>
      <Text style={styles.item}>Sua Lista</Text>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  title: {
    width: "100%",
    position: "absolute",
    top: "10%",
    textAlign: "center",
    color: "#ffff",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "700",
    padding: 24,
  },

  item: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    paddingTop: 12,
  }
});
