import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

import { FontSize, FontFamily, Color } from "../global/GlobalStyles";

export default function CustomButton(props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Color.Black,
      borderRadius: 20,
      borderColor: Color.Black,
      width: props.width * 0.8,
      height: 55,
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
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </Pressable>
  );
}
