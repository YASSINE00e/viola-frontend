import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.homePage}>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={styles.home}>Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unionIcon: {
    width: 643,
    height: 713,
  },
  home: {
    position: "absolute",
    top: 426,
    left: 100,
    fontSize: FontSize.size_56xl,
    lineHeight: 75,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 229,
    height: 75,
  },
  homePage: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Signup;
