import * as React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../global/GlobalStyles";
import Button from "../components/customButton";

const { width, height } = Dimensions.get("window");

export default function Welcome(props) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.text}>Grow Together</Text>
      </View>

      <View style={styles.joinbutton}>
        <Button
          title="Join Now"
          onPress={() => navigate("Login")}
          width={width}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgIcon: {
    width: 650,
    height: 715,
    position: "absolute",
    tintColor: Color.bg,
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
  textcontainer: {
    bottom: 150,
    position: "absolute",
    color: Color.Black,
    textAlign: "left",
    left: 30,
  },
  title: {
    fontSize: 75,
    fontWeight: "900",
    fontFamily: FontFamily.interExtraBold,
    width: width * 0.9,
  },
  text: {
    left: 10,
    fontSize: 20,
    fontFamily: FontFamily.interMedium,
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
});
