import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import ImgTopo from "../../assets/topo.png";
import imageFarm from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  const onPressButton = () => {
    Alert.alert("Botao pressionado!");
  };
  return (
    <>
      <Image source={ImgTopo} style={styles.topo} />
      <Text style={styles.title}>Detalhes da Cesta</Text>
      <View>
        <Text style={styles.item}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={imageFarm} style={styles.imageFarm} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha.
        </Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>
      </View>
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
    paddingLeft: 24,
    fontSize: 26,
    fontWeight: "900",
    paddingTop: 12,
  },

  farm: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
  },

  imageFarm: {
    width: 32,
    height: 32,
  },

  farmName: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: "bold",
    fontSize: 16,
  },

  description: {
    color: "grey",
    paddingLeft: 24,
    lineHeight: 26,
    width: "90%",
    paddingBottom: 24,
  },

  price: {
    paddingLeft: 24,
    fontSize: 28,
    fontWeight: "bold",
    color: "#2A9F25",
  },

  button: {
    marginLeft: 65,
    marginTop: 24,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: 250,
  },

  textoBotao: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
