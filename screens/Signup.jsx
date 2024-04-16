import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Button from "../components/customButton";
import Input from "../components/customInput";
import IconButton from "../components/customIconButton";

const { width, height } = Dimensions.get("window");

export default function Signup({ setSignedIn, navigation }) {
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [number, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);


  const handleSignup = async () => {};
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <IconButton
          onPress={() => navigation.navigate("Welcome")}
          source={require("../assets/back.png")}
        />
        <Text style={styles.title}>{`Create
Account :)`}</Text>

        <View style={styles.signupcontainer}>
          <Input
            title="Enter your name"
            onChangeText={onChangeName}
            value={name}
            placeholder="name"
          />
          <Input
            title="Enter your surname"
            onChangeText={onChangeSurname}
            value={surname}
            placeholder="surname"
          />
          <Input
            title="Enter your mobile number"
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
            placeholder="123456789"
          />
          <Input
            title="Enter your email"
            onChangeText={onChangeEmail}
            value={email}
            placeholder="user@mail.com"
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
          <Button title="Sign Up" onPress={handleSignup} width={width} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    top: height * 0.15,
    width: 600,
    height: 715,
    position: "absolute",
    alignSelf: "center",
    tintColor: Color.bg2,
    opacity: 0.25,
  },
  backButton: {
    top: 45,
    left: 30,
    height: 40,
    width: 40,
    position: "absolute",
  },

  signupcontainer: {
    top: height * 0.25,
    alignSelf: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  title: {
    flex: 1,
    top: height * 0.11,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    width: width * 0.6,
    fontWeight: "900",
    position: "absolute",
    left: 38,
  },
});
