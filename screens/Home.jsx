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

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />

      <Pressable onPress={() => navigation.navigate("Settings")}>
        <Image
          style={styles.SettingsIcon}
          contentFit="cover"
          source={require("../assets/accounticon.png")}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("AddPatient")}>
        <Image
          style={styles.AddIcon}
          contentFit="cover"
          source={require("../assets/addicon.png")}
        />
      </Pressable>

      <View style={styles.nopatientfound}>
        <Text style={styles.nopatient}>No patient found!</Text>
        <Text style={styles.addonenow}>Add one now.</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("AddPatient")}
        >
          <Text style={styles.Addtext}>Get started</Text>
        </Pressable>
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
  SettingsIcon: {
    top: 50,
    left: 30,
    height: 45,
    width: 45,
    position: "absolute",
  },
  AddIcon: {
    top: 50,
    right: 30,
    height: 45,
    width: 45,
    position: "absolute",
  },
  Addtext: {
    color: Color.White,
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.Black,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.Black,
    width: width * 0.7,
    height: 55,
  },

  nopatientfound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  addonenow: {
    fontSize: FontSize.small,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
    color: "#565656",
    width: width * 0.7,
    paddingBottom: 10,
  },
  nopatient: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    width: width * 0.7,
    fontWeight: "900",
  },
});
