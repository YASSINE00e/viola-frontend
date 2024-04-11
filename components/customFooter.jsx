import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";

export default function Footer({ navigation }) {
  const route = useRoute();
  const styles = StyleSheet.create({
    button: {
      //padding: 10,
    },
    icon: {
      height: 30,
      width: 30,
    },
    footer: {
      backgroundColor: Color.White,
      borderRadius: 20,
      borderColor: Color.White,
      height: 55,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      position: "absolute",
      bottom: 10,
      left: 10,
      right: 10,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 2,
    },
  });

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Map")}
      >
        {route.name == "Map" ? (
          <Image
            source={require("../assets/locationselected.png")}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../assets/location.png")}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Analysis")}
      >
        {route.name == "Analysis" ? (
          <Image
            source={require("../assets/heartselected.png")}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../assets/heart.png")}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditPatient")}
      >
        {route.name == "EditPatient" ? (
          <Image
            source={require("../assets/manageaccountsselected.png")}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../assets/manageaccounts.png")}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>

    </View>
  );
}
