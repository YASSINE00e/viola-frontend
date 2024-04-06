import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Button from "../components/customButton";

const { width, height } = Dimensions.get("window");

export default function Login({ setLogedIn, navigation }) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [number, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const handleLogin = async () => {};

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          contentFit="cover"
          source={require("../assets/bg.png")}
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

        <View style={styles.logincontainer}>
          <Text style={styles.text}>Enter your mobile number</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
            placeholder="123456789"
          />
          <Text style={styles.text}>Enter your password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={isSecureEntry}
            placeholder="**********"
            /*
            icon={
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  setIsSecureEntry(!isSecureEntry);
                }}
              >
                <Image
                  style={styles.icon}
                  source={
                    isSecureEntry
                      ? require("../assets/show.png")
                      : require("../assets/hide.png")
                  }
                />
              </TouchableOpacity>
            }
             */
          />

          <Button
            title="Login"
            onPress={() => setLogedIn(true)}
            width={width}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text style={[styles.text, { marginLeft: -10 }]}>
              Don’t have an account?
            </Text>
            <Pressable
              style={styles.text}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text
                style={[styles.text, { fontWeight: "bold", marginLeft: -30 }]}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
          <View style={styles.Loginbutton}></View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    top: height * 0.3,
    right: 0,
    width: 650,
    height: 715,
    position: "absolute",
    tintColor: Color.bg1,
  },
  icon: {
    position: "absolute",
    height: 20,
    width: 20,
  },
  backButtonIcon: {
    top: 35,
    left: 30,
    height: 45,
    width: 45,
    position: "absolute",
  },

  logincontainer: {
    flex: 1,
    top: height * 0.35,
    //justifyContent: "center",
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
    backgroundColor: Color.White,
    borderColor: "#D1D1D1",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    height: 55,
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  enterYourNumber: {
    flex: 1,
    top: height * 0.2,
    fontSize: FontSize.small,
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
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    width: width * 0.6,
    fontWeight: "900",
    position: "absolute",
    left: 38,
  },
});
