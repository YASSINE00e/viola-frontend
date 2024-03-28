import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

export default function Signin({ setSignedIn, navigation }) {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Pressable onPress={() => navigation.navigate("Welcome")}>
          <Image
            style={styles.backButtonIcon}
            contentFit="cover"
            source={require("../assets/back-button.png")}
          />
        </Pressable>

        <Text style={styles.enterYourNumber}>Enter Your Number & Password</Text>
        <Text style={styles.welcomeBack}>Welcome Back!</Text>

        <View style={styles.signincontainer}>
          <Text style={styles.text}>Enter your mobile number</Text>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            //value={number}
            keyboardType='numeric'
            placeholder="123456789"
          />
          <Text style={styles.text}>Enter your password</Text>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            //value={number}
            secureTextEntry
            placeholder="**********"
          />

          <View style={styles.Loginbutton}>
            <Pressable
              style={styles.button}
              onPress={() => setSignedIn(true)}
            >
              <Text style={styles.Logintext}>Login</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.text,{paddingLeft:20}]}>Don’t have an account?</Text>
            <Pressable
              style={styles.text}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles.text,{fontWeight: 'bold',marginLeft: -30}]}>Sign Up</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    bottom: -100,
    right: 0,
    width: 650,
    height: 715,
    position: "absolute",
  },
  backButtonIcon: {
    top: 35,
    left: 30,
    height: 45,
    width: 45,
    position: "absolute",

  },
  Logintext: {
    color: Color.colorWhite,
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.colorBlack,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    width: width * 0.8,
    height: 55,
  },

  signincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#2A2A2A",
    fontSize: 14,
    marginLeft: 40,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderColor: "#D1D1D1",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    height: 55,
  },

  container: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },

  enterYourNumber: {
    flex: 1,
    top: height * 0.2,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
    color: "#565656",
    width: width * 0.7,
    position: "absolute",
    left: 40,
  },
  welcomeBack: {
    flex: 1,
    top: height * 0.15,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    width: width * 0.6,
    fontWeight: "900",
    position: "absolute",
    left: 38,
  },
});
