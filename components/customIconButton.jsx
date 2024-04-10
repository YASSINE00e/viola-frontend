import React from "react";
import { TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function IconButton(props) {
  const styles = StyleSheet.create({
    button: {
      top: 45,
      left: 30,
      position: "absolute",
      ...props.style,
    },

    icon: {
      height: height * 0.04,
      width: width * 0.09,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Image source={props.source} style={styles.icon} />
    </TouchableOpacity>
  );
}
