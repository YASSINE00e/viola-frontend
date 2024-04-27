import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FontSize, Color } from "../global/GlobalStyles";

export default function Header(props) {
  const styles = StyleSheet.create({
    button: {},
    title: {
      fontSize: FontSize.small,
      fontWeight: "bold",
    },
    icon: {
      height: 25,
      width: 25,
    },
    header: {
      borderRadius: 20,
      borderColor: Color.White,
      height: 55,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      position: "absolute",
      top: 40,
      left: 10,
      right: 10,
    },
  });

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={props.onPressleft}>
        <Image source={props.left} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}> {props.title} </Text>
      <TouchableOpacity style={styles.button} onPress={props.onPressright}>
        <Image source={props.right} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
