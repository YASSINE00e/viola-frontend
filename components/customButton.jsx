import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { FontSize, Color } from "../global/GlobalStyles";

export default function CustomButton(props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Color.Black,
      borderRadius: 20,
      borderColor: Color.Black,
      width: props.width * 0.8,
      height: 55,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 2,
      ...props.style,
    },
    buttonTitle: {
      color: Color.White,
      fontSize: FontSize.small,
      textAlign: "center",
      padding: 14,
      fontWeight: "bold",
      ...props.textStyle,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}
