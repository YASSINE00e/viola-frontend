import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";

const { width, height } = Dimensions.get("window");

export default function AddPatient({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />

      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>

      <View style={styles.view}>
        <Text style={styles.text}>AddPatient</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 650,
    height: 715,
    position: "absolute",
    tintColor: Color.bg,
    opacity: 0.5,
  },
  backButtonIcon: {
    top: 35,
    left: 30,
    height: 45,
    width: 45,
    position: "absolute",
  },

  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    width: width * 0.7,
    fontWeight: "900",
  },
});
