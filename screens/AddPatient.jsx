import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Button from "../components/customButton";
import Input from "../components/customInput";
import Bloodtype from "../components/bloodtypeDropdown";
import Age from "../components/ageDropdown";


const { width, height } = Dimensions.get("window");

export default function Signup({ setSignedIn, navigation }) {
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [age, onChangeAge] = useState("");
  const [bloodtype, onChangeBloodtype] = useState("");
  const [houselocation, onChangeHL] = useState("");
  const [wieght, onChangeWieght] = useState("");

  const handleAddPatient = async () => {};
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.backButton}
            resizeMode="cover"
            source={require("../assets/back-button.png")}
          />
        </Pressable>

        <Text style={styles.title}>{`Add a new patient.`}</Text>

        <ScrollView style={styles.signupcontainer}>
          <Input
            title="Enter your patient name"
            onChangeText={onChangeName}
            value={name}
            placeholder="name"
          />
          <Input
            title="Enter your patient surname"
            onChangeText={onChangeSurname}
            value={surname}
            placeholder="surname"
          />
          <View style={{ flexDirection: "row" }}>
            <Bloodtype />
            <Age />
          </View>
          <Input
            title="Enter your patient house location"
            onChangeText={onChangeHL}
            value={houselocation}
            secureTextEntry
            placeholder="R6, Monastir"
          />
          <Input
            title="Enter your patient wieght"
            onChangeText={onChangeWieght}
            value={wieght}
            secureTextEntry
            placeholder="65kg"
            keyboardType="numeric"
          />

          <Button
            title="Add Patient"
            onPress={handleAddPatient}
            width={width}
          />
        </ScrollView>
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
