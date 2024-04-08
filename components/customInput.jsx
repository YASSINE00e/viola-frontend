import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { FontSize, FontFamily, Color } from "../global/GlobalStyles";

export default function customInput(props) {
  const styles = StyleSheet.create({
    title: {
      color: Color.text,
      fontSize: FontSize.xsmall,
      marginBottom: 10,
      ...props.titleStyle,
    },
    input: {
      borderRadius: 20,
      borderWidth: 1,
      backgroundColor: Color.White,
      borderColor: Color.border,
      padding: 10,
      marginBottom: 20,
      height: 55,
      ...props.inputStyle,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 2,
    },
    container: {},
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}
