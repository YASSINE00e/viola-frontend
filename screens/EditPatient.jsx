import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Header from "../components/customHeader";
import Footer from "../components/customFooter";

const { width, height } = Dimensions.get("window");

export default function EditPatient(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />


      <Header
          navigation={props.navigation}
          title="EditPatient."
          onPressright={() => alert("EditPatient")}
          right={require("../assets/dots.png")}
          onPressleft={() => props.navigation.navigate("Home")}
          left={require("../assets/back.png")}
        ></Header>

      <View style={styles.view}>
        <Text style={styles.text}>Edit Patient</Text>
      </View>

      <Footer navigation={props.navigation} />
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
