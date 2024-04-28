import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../components/customButton";
import Input from "../components/customInput";
import IconButton from "../components/customIconButton";

import apiRoutes from "../global/apiRoutes";
import { post } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function Login(props) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [number, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const handleLogin = async () => {
    const body = {
      Phone: number,
      Password: password,
    };

    try {
      var response = await post(apiRoutes.login, body);

      if (response.status === 200) {
        await AsyncStorage.setItem("isLoggedIn", "true");
        await AsyncStorage.setItem("id", String(response.id));
        props.setLogedIn(true);
      } else if (response.status === 401) {
        Alert.alert("Incorrect password.");
      } else if (response.status === 404) {
        Alert.alert("User not found.");
      } else {
        Alert.alert("An error occurred.");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <IconButton
          onPress={() => props.navigation.navigate("Welcome")}
          source={require("../assets/back.png")}
        />

        <Text style={styles.secondtitle}>Enter Your Number & Password</Text>
        <Text style={styles.title}>Welcome Back!</Text>

        <View style={styles.logincontainer}>
          <Input
            title="Enter your mobile number"
            onChangeText={onChangeNumber}
            value={number}
            placeholder="123456789"
            keyboardType="numeric"
          />
          <View>
            <Input
              title="Enter your password"
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry={isSecureEntry}
              placeholder="**********"
            />
            <TouchableOpacity
              onPress={() => setIsSecureEntry(!isSecureEntry)}
              style={{
                alignSelf: "flex-end",
                right: 20,
                marginTop: 50,
                position: "absolute",
              }}
            >
              <Image
                source={
                  isSecureEntry
                    ? require("../assets/show.png")
                    : require("../assets/hide.png")
                }
              />
            </TouchableOpacity>
          </View>
          <Button title="Login" onPress={handleLogin} width={width} />

          <View style={styles.text}>
            <Text>Don’t have an account?</Text>
            <Pressable onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Sign Up</Text>
            </Pressable>
          </View>
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


  logincontainer: {
    top: height * 0.35,
    alignSelf: "center",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  secondtitle: {
    top: height * 0.2,
    fontSize: FontSize.small,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
    color: "#565656",
    width: width * 0.7,
    position: "absolute",
    left: 40,
  },
  title: {
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
