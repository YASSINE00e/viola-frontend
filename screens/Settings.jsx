import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Header from "../components/customHeader";
import Button from "../components/customButton";
import Welcome from "../screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import apiRoutes from "../global/apiRoutes";
import { get, post } from "../global/apiCalls";

import Input from "../components/customInput";
const { width, height } = Dimensions.get("window");

export default function Settings(props) {
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [number, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    setLoading(true);
    try {
      const caregiverId = parseInt(await AsyncStorage.getItem("id"));
      const response = await get(apiRoutes.getUserData + `?id=${caregiverId}`);
      if (response.status == 200) {
        const data = response.data;
        onChangeName(data.name);
        onChangeSurname(data.surname);
        onChangeNumber(data.phone);
        onChangeEmail(data.mail);
        onChangePassword(data.password);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleChangeData = async () => {
    const body = {
      caregiverId: parseInt(await AsyncStorage.getItem("id")),
      name: name,
      surname: surname,
      phone: number,
      mail: email,
      password: password,
    };

    try {
      const response = await post(apiRoutes.changeData, body);
      console.log(response);
      if (response.status == 200) {
        Alert.alert("Data updated");
      } else {
        Alert.alert("An error occurred.");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleDeleteUser = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              const caregiverId = parseInt(await AsyncStorage.getItem("id"));
              const response = await post(apiRoutes.deleteUser + `?id=${caregiverId}`);
              console.log(response);
              if (response.status == 200) {
                console.log(response);
                await AsyncStorage.setItem("isLoggedIn", "false");
                await AsyncStorage.setItem("id", "");
                props.setLogedIn(false);
                props.navigation.navigate(Welcome);
                Alert.alert("Deleted Successfully");
              } else {
                Alert.alert("An error occurred.");
              }
            } catch (error) {
              Alert.alert(error.message);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };


  const handleLogout = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      await AsyncStorage.setItem("id", "");
      props.setLogedIn(false);
      props.navigation.navigate(Welcome);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.bg} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />

        <Header
          navigation={props.navigation}
          title="Settings."
          onPressright={() => alert("Here you can update the caregiver's informations.")}
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
          <Button
            title="Done"
            onPress={handleChangeData}
            width={width}
            style={{ marginBottom: 10 }}
          />
          <Button
            title="Log out"
            onPress={handleLogout}
            width={width}
          />
        </View>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleDeleteUser}>
          <Text style={styles.logout}>Delete User</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
