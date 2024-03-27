import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get("window"); // Get the screen dimensions

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.letsGetStarted}>Let’s Get Started</Text>
        <Text style={styles.growTogether}>Grow Together</Text>
      </View>

      <View style={styles.joinbutton}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.jointext}>Join Now</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  bgIcon: {
    width: 650,
    height: 715,
    position: "absolute",
  },
  logocontainer: {
    marginTop: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    resizeMode: "contain",
    width: 350,
    height: 75,
  },
  joinbutton: {
    padding: 30,
    alignItems: "center",
  },
  jointext: {
    color: Color.colorWhite,
    textAlign: "center",
    padding: 18,
    fontSize: 25,
    lineHeight: 21,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.colorBlack,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderRadius: 25,
    width: width * 0.6,
    height: 55,
  },
  textcontainer: {
    bottom: 150,
    position: "absolute",
    color: Color.colorBlack,
    textAlign: "left",
    left: 30,
  },
  letsGetStarted: {
    fontSize: 75,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: width * 0.9,
  },
  growTogether: {
    left: 10,
    fontSize: 20,
    fontFamily: FontFamily.interMedium,
  },

  container: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
});
