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
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Button from "../components/customButton";
import Input from "../components/customInput";
import IconButton from "../components/customIconButton";

import apiRoutes from "../global/apiRoutes";
import { post } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function Signup({ setLogedIn, navigation }) {
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [number, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [nameVerify, setNameVerify] = useState(null);
  const [surnameVerify, setSurnameVerify] = useState(null);
  const [numberVerify, setNumberVerify] = useState(null);
  const [passwordVerify, setPasswordVerify] = useState(null);

  function handleName(nameVar) {
    onChangeName(nameVar);
    setNameVerify(false);
    if (name.length > 2) {
      onChangeName(nameVar);
      setNameVerify(true);
    }
  }
  function handleSurname(surnameVar) {
    onChangeSurname(surnameVar);
    setSurnameVerify(false);
    if (surname.length > 2) {
      onChangeSurname(surnameVar);
      setSurnameVerify(true);
    }
  }
  function handleNumber(numberVar) {
    onChangeNumber(numberVar);
    setNumberVerify(false);
    if (/[0-9]*[0-9]{8}/.test(numberVar)) {
      onChangeNumber(numberVar);
      setNumberVerify(true);
    }
  }
  function handlePassword(passwordVar) {
    onChangePassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      onChangePassword(passwordVar);
      setPasswordVerify(true);
    }
  }
  const handleSignup = async () => {
    const body = {
      name: name,
      surname: surname,
      phone: number,
      mail: email,
      password: password,
    };

    try {
      const response = await post(apiRoutes.register, body);
      if (response.status === 200) {
        setLogedIn(true);
      } else if (response.status === 409) {
        Alert.alert("Account already exists");
      } else {
        Alert.alert("An error occurred.");
      }
    } catch (error) {
      Alert.alert(error);
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
          onPress={() => navigation.navigate("Welcome")}
          source={require("../assets/back.png")}
        />
        <Text style={styles.title}>{`Create
Account :)`}</Text>

        <View style={styles.signupcontainer}>
          <View>
            <Input
              title="Enter your name"
              onChangeText={handleName}
              value={name}
              placeholder="name"
            />
            {nameVerify && (
              <Image
                source={require("../assets/verified.png")}
                style={{
                  alignSelf: "flex-end",
                  right: 20,
                  marginTop: 50,
                  position: "absolute",
                  width: 18,
                  height: 18,
                }}
              />
            )}
            {nameVerify == false && (
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: -15,
                  marginBottom: 5,
                  color: "red",
                }}
              >
                Name sholud be more then 3 characters.
              </Text>
            )}
          </View>
          <View>
            <Input
              title="Enter your surname"
              onChangeText={handleSurname}
              value={surname}
              placeholder="surname"
            />
            {surnameVerify && (
              <Image
                source={require("../assets/verified.png")}
                style={{
                  alignSelf: "flex-end",
                  right: 20,
                  marginTop: 50,
                  position: "absolute",
                  width: 18,
                  height: 18,
                }}
              />
            )}
            {surnameVerify == false && (
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: -15,
                  marginBottom: 5,
                  color: "red",
                }}
              >
                Surname sholud be more then 3 characters.
              </Text>
            )}
          </View>
          <View>
            <Input
              title="Enter your mobile number"
              onChangeText={handleNumber}
              value={number}
              keyboardType="numeric"
              placeholder="123456789"
            />
            {numberVerify && (
              <Image
                source={require("../assets/verified.png")}
                style={{
                  alignSelf: "flex-end",
                  right: 20,
                  marginTop: 50,
                  position: "absolute",
                  width: 18,
                  height: 18,
                }}
              />
            )}
            {numberVerify == false && (
              <Text
                style={{ alignSelf: "center", marginTop: -15, color: "red" }}
              >
                Phone number sholud be more then 8 digit.
              </Text>
            )}
          </View>
          <Input
            title="Enter your email"
            onChangeText={onChangeEmail}
            value={email}
            placeholder="user@mail.com"
          />
          <View>
            <Input
              title="Enter your password"
              onChangeText={handlePassword}
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

            {passwordVerify == false && (
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: -15,
                  marginBottom: 15,
                  color: "red",
                }}
              >
                {`Uppercase, Lowercase, Number
      and 6 or more characters.`}
              </Text>
            )}
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
