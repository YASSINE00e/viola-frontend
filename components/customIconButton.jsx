import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function IconButton(props) {
  const styles = StyleSheet.create({
    button: {
      top: 45,
      left: 30,
      position: "absolute",
      ...props.style,
    },

    icon: {
      height: 40,
      width: 40,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Image source={props.source} style={styles.icon} />
    </TouchableOpacity>
  );
}
