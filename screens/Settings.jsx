import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Header from "../components/customHeader";
import Button from "../components/customButton";
import Welcome from "../screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Input from "../components/customInput";
const { width, height } = Dimensions.get("window");

export default function Settings(props) {
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [number, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const handleLogout = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      props.setLogedIn(false);
      props.navigation.navigate(Welcome);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />

      <Header
        navigation={props.navigation}
        title="Settings."
        onPressright={() => alert("Settings")}
        right={require("../assets/dots.png")}
        onPressleft={() => props.navigation.navigate("Home")}
        left={require("../assets/back.png")}
      ></Header>

      <View style={styles.settingscontainer}>
        <Input
          title="Change your name"
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
        />
        <Input
          title="Change your surname"
          onChangeText={onChangeSurname}
          value={surname}
          placeholder="surname"
        />
        <Input
          title="Change your mobile number"
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          placeholder="123456789"
        />
        <Input
          title="Change your email"
          onChangeText={onChangeEmail}
          value={email}
          placeholder="user@mail.com"
        />
        <Input
          title="Change your password"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry
          placeholder="**********"
        />
        <Button title="Done" width={width} />
      </View>
      <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleLogout}>
        <Text style={styles.logout}>Log out</Text>
      </TouchableOpacity>
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
  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  settingscontainer: {
    top: height * 0.15,
    alignSelf: "center",
  },
  logout: {
    alignSelf: "center",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.small,
    color: "red",
  },
});
