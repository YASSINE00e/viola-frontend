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
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Button from "../components/customButton";
import Input from "../components/customInput";
import Bloodtype from "../components/bloodtypeDropdown";
import Age from "../components/ageDropdown";
import IconButton from "../components/customIconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "../global/apiRoutes";
import { post } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function Signup({ navigation }) {
  const [ViolaId, onChangeViolaId] = useState(null);
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [age, onChangeAge] = useState(null);
  const [bloodtype, onChangeBloodtype] = useState("");
  const [houselocation, onChangeHL] = useState("");
  const [weight, onChangeWeight] = useState("");

  const handleAddPatient = async () => {
    const caregiverId = parseInt(await AsyncStorage.getItem("id"));

    const body = {
      ViolaId: ViolaId,
      Name: name,
      Surname: surname,
      Age: parseInt(age),
      HouseLocation: houselocation,
      BloodType: bloodtype,
      Weight: parseInt(weight),
      CaregiverId: caregiverId,
    };

    try {
      const response = await post(apiRoutes.addPatient, body);
      if (response.status == 200) {
        navigation.navigate("Home");
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
          onPress={() => navigation.navigate("Home")}
          source={require("../assets/back.png")}
        />

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
            <Bloodtype value={bloodtype} onChange={onChangeBloodtype} />
            <Age value={age} onChange={onChangeAge} />
          </View>
          <Input
            title="Enter your patient house location"
            onChangeText={onChangeHL}
            value={houselocation}
            placeholder="R6, Monastir"
          />
          <Input
            title="Enter your patient weight"
            onChangeText={onChangeWeight}
            value={weight}
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
