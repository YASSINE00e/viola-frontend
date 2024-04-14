import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";

export default function Card(props) {
  const route = useRoute();
  const styles = StyleSheet.create({
    id: {
      fontSize: FontSize.small,
      margin: -5,
      color: Color.Black,
    },
    text: {
      fontFamily: FontFamily.interBold,
      fontSize: FontSize.medium,
      margin: 20,
      marginTop: 15,
      color: Color.Black,
    },
    icon: {
      height: 30,
      width: 30,
      margin: 20,
      tintColor: Color.Black,
    },
    bg: {
      overflow: "hidden",
      position: "absolute",
      height: 300,
      width: 300,
    },
    footer: {
      backgroundColor: "#071C42",
      borderRadius: 20,
      borderColor: "#071C42",
      //borderWidth: 2,
      width: "90%",
      height: 150,

      //flexDirection: "row",
      //alignItems: "center",
      //justifyContent: "space-around",
      margin: 5,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
  });

  return (
    <TouchableOpacity
      style={styles.footer}
      onPress={() => props.navigation.navigate("Map")}
    >
      <ImageBackground
        source={require("../assets/cardbg2.png")}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Image source={require("../assets/favicon.png")} style={styles.icon} />
          <Text style={styles.id}>#{props.id}</Text>
        </View>
        <Text style={styles.text}>Yassine Azzouz</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
