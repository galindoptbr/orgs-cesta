import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function Texto({ children, style }) {
  return (
    <View>
      <Text style={[style, styles.texto]}>{ children }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "San Francisco",
  },
});
